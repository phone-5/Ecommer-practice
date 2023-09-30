import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteproductcart, fetchCart } from "../api/api";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Loading from "../components/Loading";

import CartList from "../components/CartList";
const Cart = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [quantity, setQuantity] = useState(1);
  const queryclient = useQueryClient();

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 10 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const deleteProductMutation = useMutation({
    mutationFn: deleteproductcart,
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["cartproduct"] });
    },
  });
  const handleDelete = (id) => {
    console.log(id);
    deleteProductMutation.mutate(id);
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["cartproduct"],
    queryFn: fetchCart,
  });
  if (isLoading) return <Loading />;
  if (isError) return `Error ${error.message}`;
  const render = data.length == 0;

  let Q;

  return (
    <div className="cart-container position-relative">
      {!render ? (
        <div>
          <div className="table">
            <div className={stickyClass}>
              <div className="d-flex cart-title">
                <div className="col-6 text-start">products</div>
                <div className="col-3 text-center">quantity</div>
                <div className="col-3 text-center">subtotal</div>
              </div>
            </div>
            <div>
              {data.map((p) => {
                let total = 0;
                return (
                  <CartList
                    key={p.id}
                    setTotal={setQuantity}
                    handleDelete={handleDelete}
                    p={p}
                  />
                );
              })}
              <div className="total">
                <p className="col-9">Total</p>
                <div className="col-3"> {quantity}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="empty position-absolute">
            Your cart is empty right now
          </h3>
          <div className="cart-img-container container-xxl"></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
