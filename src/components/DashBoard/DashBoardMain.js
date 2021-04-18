import React from 'react'
import FooterInfo from '../Shared/Footer/FooterInfo'
import DashBoard from './DashBoard'
import second from "../img/toolfive.png";
const DashBoardMain = () => {
    return (
        <div className="container-fluid">
        <h1 className="text-center">Dashboard</h1>
        <div className="container py-5">
        <div className="row">
            <div className="col-md-6">
            <DashBoard/>
            </div>
            <div className="col-md-6">
            <figure>
            <img src={second} className="img-fluid" alt="" />
          </figure>
            </div>
        </div>
           
           
        </div>
        <FooterInfo/>
        </div>
    )
}

export default DashBoardMain
