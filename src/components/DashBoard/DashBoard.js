import React from "react";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className=" col-md-4">
      <ul className="nav flex-column">
        <li className="nav-item text-center">
          <Link className="nav-link active" to="/serviceform">
            <h5>Add Service</h5>
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link" to="/reviewform">
            <h5>Review</h5>
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link" to="/orders">
            <h5>Orders</h5>
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link" to="/manage">
            <h5>Manage Data</h5>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashBoard;
