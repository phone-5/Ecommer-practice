import React, { useState } from "react";

const CustomInput = (props) => {
  const { type, label, i_id, i_class, i_name, value_i, onInputChange } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type={type}
          className={`form-control ${i_class}`}
          id={i_id}
          placeholder={label}
          name={i_name}
          value={value_i}
          onChange={handleChange}
        />
        <label htmlFor={label}>{label}</label>
      </div>
    </div>
  );
};

export default CustomInput;
