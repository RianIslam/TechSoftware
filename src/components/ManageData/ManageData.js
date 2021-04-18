import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import FooterInfo from "../Shared/Footer/FooterInfo";
import DeleteData from "./DeleteData";

const ManageData = () => {
  const [manage, setManage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addOrder")
      .then((res) => res.json())
      .then((data) => setManage(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <DashBoard />
        </div>
        <div className="col-md-8">
          {manage.map((de) => (
            <DeleteData de={de} />
          ))}
        </div>
      </div>
      <FooterInfo/>
    </div>
  );
};

export default ManageData;
