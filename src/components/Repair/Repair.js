import React from "react";
import second from "../img/headermainbg.jpg";
const Repair = () => {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-md-6">
          <h1 className="display-4">
            Need Fast <br />
            Laptop and Hardware Repairs?
          </h1>
          <p>
            Laptops can come in all different shapes and sizes. From timid, but
            reliable business tools to crazy computing power that would rival
            most supercomputers only about half a decade ago psums necerat in
            ultrices aesent vestibulum sapien in molestie.
          </p>
          <button>Read More</button>
        </div>
        <div className="col-md-6">
          <figure>
            <img src={second} className="img-fluid" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Repair;
