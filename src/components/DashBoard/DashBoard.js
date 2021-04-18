import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const DashBoard = () => {

  const [loggedInUser,setLoggedInUser] = useContext(UserContext)

  const [isAdmin,setIsAdmin] = useState(false)
  
   useEffect(()=>{

    fetch("http://localhost:5000/isAdmin",{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({admin: loggedInUser.email})
      //admin:`programminghero001@gmail.com`
    })
    .then((res) => res.json())
     .then((data) => setIsAdmin(data))

  },[])



  return (
  
    <div className=" col-md-4">
      <ul className="nav flex-column">
      <li className="nav-item text-center">
          <Link className="nav-link" to="/orders">
            <h5>Orders</h5>
          </Link>
        </li>

       {isAdmin && <div>
        <li className="nav-item text-center">
          <Link className="nav-link" to="/reviewform">
            <h5>Review</h5>
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link active" to="/serviceform">
            <h5>Add Service</h5>
          </Link>
        </li>
        
        <li className="nav-item text-center">
          <Link className="nav-link" to="/manage">
            <h5>Manage Data</h5>
          </Link>
        </li>
        </div>}
      </ul>
    </div>
  );
};

export default DashBoard;
