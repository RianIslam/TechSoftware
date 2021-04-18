import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'

const OrderData = () => {

  const [loggedInUser,setLoggedInUser] = useContext(UserContext)

    const [orders,setOrders] =  useState([])
    useEffect(() => {
        fetch("http://localhost:5000/addOrder?email="+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])


    return (
        <div className="container">
      <h2 className="text-center text-danger p-5"><strong>Your total Order is {orders.length}</strong> </h2>
      {orders.map((load) => (

        <div className="shadow bg-body mb-3 p-2 rounded">
        <div className="row">
          <div className="col-md-3">
            <h5>
              <strong>Customer Name</strong>
            </h5>
            <h6>{load.name}</h6>
            
          </div>
          <div className="col-md-3">
            <h5>
              <strong>Customer Email</strong>
            </h5>
            <h6>{load.email}</h6>
          </div>
          <div className="col-md-3">
            <h5>
              <strong>Service Name</strong>
            </h5>
            <h6>{load.nameservice}</h6>
          </div>
          <div className="col-md-3">
            <h5>
              <strong>Your Total Service</strong>
            </h5>
            <h6>{orders.length}</h6>
          </div>
        </div>
      </div>


          
      ))}
    </div>
    )
}

export default OrderData
