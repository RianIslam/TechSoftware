import React from 'react'
import { Link, useHistory } from 'react-router-dom'



const Service = ({infoser}) => {

  const history = useHistory();
const handleBook = () => {
  // history.push('/destination');
  history.push("/service/"+title)
  
}


  const {title,description,imageURL,_id,price} = infoser
    console.log(infoser.title)
    return (
        <div className="col-md-4 col-sm-12 col-lg-4 p-3 rounded">
      <div className="card h-100 shadow text-center">
        <div style={{ borderRadius: "20px",cursor:'pointer' }} className="m-3">
          <img onClick={handleBook} src={imageURL} style={{width:"100px",height:"100px"}} className="rounded card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 style={{cursor:'pointer'}} className="card-title">{title}</h5>
          
          <h6 style={{cursor:'pointer'}} onClick={handleBook} className="card-title">Price:${price}</h6>
          <h6 style={{cursor:'pointer'}} onClick={handleBook} className="card-title">{description}</h6>
        </div>
      </div>
    </div>
    )
}

export default Service
