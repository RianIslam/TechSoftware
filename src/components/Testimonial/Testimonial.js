import React from 'react'

const Testimonial = ({testimoni}) => {
    return (
        <div className="col-md-4 col-sm-12 col-lg-4 p-3 rounded">
      <div className="card h-100 shadow text-center">
        <div style={{ borderRadius: "20px" }} className="m-3">
          <img src={testimoni.imageURL} style={{width:"100px",height:"100px"}} className="card-img-top rounded-circle" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{testimoni.name}</h5>
          <h6 className="card-title">{testimoni.review}</h6>

        </div>
      </div>
    </div>
    )
}

export default Testimonial
