import React from 'react'

const DeleteData = ({de}) => {

    const deleteEvent = (id) => {
        fetch(`https://ancient-coast-34039.herokuapp.com/deleteEvent/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("delete successfully", result);
            alert("data deleted")
          });
      };


      const{name,email,nameservice,_id} = de

    return (
        <div className="shadow bg-body mb-3 p-2 rounded">
        <div className="row">
          <div className="col-md-3">
            <h5>
              <strong>Name</strong>
            </h5>
            <h6>{name}</h6>
          </div>
          <div className="col-md-3">
            <h5>
              <strong>Email</strong>
            </h5>
            <h6>{email}</h6>
          </div>
          <div className="col-md-3">
            <h5>
              <strong>Service</strong>
            </h5>
            <h6>{nameservice}</h6>
          </div>
          <div className="col-md-3">
          <strong>Action</strong>
          <br/>
          <button className="btn btn-info" onClick={() => deleteEvent(_id)}>Delate</button>
          </div>
          
        </div>
      </div>
   
    )
}

export default DeleteData
