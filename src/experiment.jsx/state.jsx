import React, { useState } from "react";

const State = () => {
  const [post, setpost] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
  };

  const render = (label) => (
    <div>
      <label>{label}</label>
      <input
        onChange={handleChange}
        type="text"
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
      />
    </div>
  );

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };
  return (
    <form onSubmit={handlesubmit}>
      {render("Title")}
      {render("Body")}
      <button type="submit">Submit</button>
    </form>
  );
};

export default State;
