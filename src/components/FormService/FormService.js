import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import FooterInfo from "../Shared/Footer/FooterInfo";

const FormService = () => {
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
      title: data.title,
      price: data.price,
      description: data.description,
      imageURL: imageURL,
    };
    const url = `http://localhost:5000/addService`;
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
    <div>
      <div className="container-fluid">
        <div className="row">
          <DashBoard />

          <div className="col-md-8 p-3 ">
            <h1>helllo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="title" placeholder="title" {...register("title")} />
              <input
                name="description"
                placeholder="description"
                {...register("description")}
              />

              <input name="price" placeholder="price" {...register("price")} />

              <input
                style={{
                  background: "blue",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                }}
                name="exampleRequired"
                type="file"
                onChange={handleImageUpload}
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
};

export default FormService;
