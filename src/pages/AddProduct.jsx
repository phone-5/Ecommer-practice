import React, { useEffect, useState } from "react";
import CustomInput from "../components/Custom";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { putProductToShopC, putProductToShopD } from "../api/api";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Set the initial selected value

  const [formData, setFormData] = useState({
    image1: "",
    image2: "",
    price: "",
    category: "clothes",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => console.log(formData), [formData]);

  const navigate = useNavigate();
  const { status, error, mutate } = useMutation({
    mutationFn:
      selectedOption == "clothes" ? putProductToShopC : putProductToShopD,
  });

  const handleAddProduct = (data) => {
    mutate({
      id: uuidv4(),
      image1: data.image1,
      image2: data.image2,
      price: data.price,
      category: data.category,
    });
  };

  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  };
  const handleSelectChange = (event) => {
    // Update the selectedOption state when the user changes the selection
    setSelectedOption(event.target.value);
    handleInputChange(event.target.name, event.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="cate-box select-container">
          <label htmlFor="selectBox" className="me-3">
            Category:
          </label>
          <select
            className="selectBox"
            value={selectedOption}
            name="category"
            onChange={handleSelectChange}
          >
            <option>clothes</option>
            <option>digital</option>
          </select>
        </div>
        <CustomInput
          type="text"
          label="Image(1)"
          i_id="Image(1)"
          i_name="image1"
          value_i={formData.image1}
          onInputChange={handleInputChange}
        />
        <CustomInput
          type="text"
          label="Image(2)"
          i_id="Image(2)"
          i_name="image2"
          value_i={formData.image2}
          onInputChange={handleInputChange}
        />

        <CustomInput
          type="text"
          label="Price"
          i_id="Price"
          i_name="price"
          value_i={formData.price}
          onInputChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn"
          onClick={() => {
            handleAddProduct(formData);
            setFormData({
              image1: "",
              image2: "",
              price: "",
              category: "clothes",
            });
            setSelectedOption("clothes");
          }}
        >
          Add product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
