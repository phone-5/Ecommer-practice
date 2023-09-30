import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import BarChart from "../components/Chart/BarChart";

const Dashboard = () => {
  return (
    <div>
      <div className="gap-10 d-center">
        <div className="d-flex p-3 justify-content-between align-items-center flex-grow-1 bg-white ">
          <div>
            <p className="mb-2">Total</p> <h5>$200500</h5>
          </div>

          <div className="d-flex flex-column align-items-end">
            <h6 className="arrowdown">
              <BsArrowDownRight />
              35%
            </h6>

            <p>compared to April 2023</p>
          </div>
        </div>
        <div className="d-flex p-3 justify-content-between align-items-center flex-grow-1 bg-white ">
          <div>
            <p className="mb-2">Total</p> <h5>$200500</h5>
          </div>

          <div className="d-flex flex-column align-items-end">
            <h6 className="arrowup">
              <BsArrowUpRight />
              55%
            </h6>
            <p>compared to April 2023</p>
          </div>
        </div>
        <div className="d-flex p-3 justify-content-between align-items-center flex-grow-1 bg-white ">
          <div>
            <p className="mb-2">Total</p> <h5>$200500</h5>
          </div>

          <div className="d-flex flex-column align-items-end">
            <h6 className="arrowdown">
              <BsArrowDownRight className="" />
              35%
            </h6>
            <p>compared to April 2023</p>
          </div>
        </div>
      </div>
      <BarChart />
    </div>
  );
};

export default Dashboard;
