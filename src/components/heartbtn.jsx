import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import {
  deleteproduct,
  fetchCProduct,
  fetchDProduct,
  putProductToFav,
} from "../api/api";

function Heartbtn({ id, category }) {
  const [isActive, setIsActive] = useState(
    localStorage.getItem(`elementVisible${id}`) === "true"
  );

  useEffect(() => {
    localStorage.setItem(`elementVisible${id}`, isActive);
  }, [isActive]);

  const queryclient = useQueryClient();
  const {
    status,
    error: muerror,
    mutate,
  } = useMutation({
    mutationFn: putProductToFav,
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey:
          category === "clothes" ? ["cproducts", id] : ["dproducts", id],
      });
      console.log("nice");
    },
  });
  const deleteProductMutation = useMutation({
    mutationFn: deleteproduct,
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["favproduct"] });
    },
  });

  const handleAddProduct = (data) => {
    mutate({
      id: data.id,
      image1: data.image1,
      image2: data.image2,
      price: data.price,
      category: data.category,
    });
  };
  const handleDelete = (id) => {
    console.log(id);
    deleteProductMutation.mutate(id);
  };
  const {
    data: C,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: category === "clothes" ? ["cproduct", id] : ["dproduct", id],
    queryFn: () =>
      category == "clothes" ? fetchCProduct(id) : fetchDProduct(id),
    enabled: true, // Set this to false if you want to manually trigger fetching
    refetchOnWindowFocus: false,
  });

  if (isLoading) return " Loading...";
  if (isError) return `Error ${error.message}`;
  const changeColor = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      id={id}
      onClick={() => {
        changeColor();
        isActive ? handleDelete(id) : handleAddProduct(C);
      }}
      className=" "
    >
      <FaHeart
        className={`heartp ${isActive ? "hearted" : ""}  position-absolute`}
      />
    </div>
  );
}

export default Heartbtn;
