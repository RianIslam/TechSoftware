import React from 'react'

const Footer = ({foot}) => {
    return (
        <div className="row text-white py-5">
            <div className="col-md-4">
                <h1>{foot.header}</h1>
                <p>{foot.describe}</p>
                <button className="btn btn-outline-info">{foot.button}</button>
            </div>
            <div className="col-md-8 py-5">
                <div className="row px-5">
                    <div className="col-md-2">
                        <h5>FOLLOW US</h5>
                        <h6>{foot.facebook}</h6>
                        <h6>{foot.twitter}</h6>
                        <h6>{foot.google}</h6>
                    </div>
                    <div className="col-md-3">
                        <h5>RECENT LINKS </h5>
                        <h6>{foot.center}</h6>
                        <h6>{foot.about}</h6>
                        <h6>{foot.support}</h6>
                    </div>
                    <div className="col-md-3">
                        <h5>CONTACT US</h5>
                        <h6>{foot.email}</h6>
                        <h6>{foot.phone}</h6>
                        <h6>{foot.address}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
