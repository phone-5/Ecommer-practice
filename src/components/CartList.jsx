import React, { useEffect, useState } from "react";

const CartList = ({ handleDelete, p, setTotal }) => {
  const [Q, setQ] = useState(localStorage.getItem(`quanitity${p.id}`));
  useEffect(() => {
    setTotal((n) => n + localStorage.getItem(`quanitity${p.id}`) * p.price);
  }, [Q]);

  return (
    <div>
      <div className="data d-flex" id={p.id}>
        <div className="text-start col-6">
          <div className="imgdiv">
            <img src={p.image1} alt="image" />
          </div>
          <div
            className="remove"
            onClick={() => {
              handleDelete(p.id);
            }}
          >
            <h6 className="pointer">REMOVE</h6>
          </div>
        </div>
        <div className="col-3 d-center">
          <div>
            <div>
              <div className="d ">
                <i onClick={() => setQ((cur) => cur + 1)}>&#9650;</i>
                <h6 className="quantity text-center">{Q}</h6>
                <i onClick={() => (!Q == 0 ? setQ((cur) => cur - 1) : null)}>
                  &#9660;
                </i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 d-center">{Q * p.price}</div>
      </div>
    </div>
  );
};

export default CartList;
