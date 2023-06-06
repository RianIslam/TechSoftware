import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard.js";
import FooterInfo from "../Shared/Footer/FooterInfo.js";
const FormReView = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const handleImageUpload = (event) => {
    console.log(event.target.files);
    const imageData = new FormData();
    imageData.set("key", "7ccad3739d2c6beb69bd5088f881a14a");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      review: data.review,
      imageURL: imageURL,
    };
    const url = `https://techsoft-backend.vercel.app/addReview`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
  };
  return (
    <div >
      <div className="container-fluid py-5">
        <div className="row">
          <DashBoard />
          <div className="col-md-8 p-3">
            <h1 className="text-center">Review</h1>
            <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h6><strong>Add Name</strong></h6>
              <input name="name" placeholder="name" {...register("name")} />
              <h6><strong>Add Review</strong></h6>
              <input
                name="review"
                placeholder="review"
                {...register("review")}
              />
              
              <h6><strong>Add Your Photo</strong></h6>
              <input
                style={{
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                }}
                className="bg-info"
                name="exampleRequired"
                type="file"
                onChange={handleImageUpload}
              />
              <input type="submit" />
            </form>
            </div>
          </div>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
};

export default FormReView;
