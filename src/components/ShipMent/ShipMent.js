import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const ShipMent = () => {
  const { servicetitle } = useParams();

  const [pays, setPays] = useState([]);

  useEffect(() => {
    fetch("https://techsoft-backend.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setPays(data));
  }, []);

  const payout = pays.find((py) => py?.title == servicetitle);

  
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)

  const handleOrder =()=>{
    const newAdded ={...loggedInUser, nameservice: servicetitle}
    console.log(newAdded)
    fetch('https://techsoft-backend.vercel.app/order',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newAdded)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert('order placed successfully')
    })
  }


  return (
    <div className="container">
      <div className="col-12 py-5">
        <div className="shadow p-3 mb-5 bg-body rounded">
          <h1 className="py-5">Booking</h1>
          <div className="row">
            <div className="col-md-8">
              <div className="col-md-4">
                <h5>
                  <strong>Service Title</strong>
                </h5>
                <h6>{payout?.title}</h6>
              </div>
              <br/>
              <br/>
              <div className="col-md-4">
                <h5>
                  <strong>Price</strong>
                </h5>
                <h6>${payout?.price}</h6>
              </div>
            </div>
            <div className="col-md-4">
              <ProcessPayment />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
        <button onClick={handleOrder} className="btn btn-info">Order By {loggedInUser.name}</button>
      </div>
      </div>
      
    </div>
  );
};

export default ShipMent;
