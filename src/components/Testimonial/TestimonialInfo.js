import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

const TestimonialInfo = () => {
  const[reviews,setReviews] = useState([])

  useEffect(()=>{
    fetch('https://techsoft-backend.vercel.app/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  // const testimonials = [
  //   {
  //     name: "villain",
  //     describe: "",
  //   },
  //   {
  //     name: "villain",
  //     describe: "",
  //   },
  //   {
  //     name: "villain",
  //     describe: "",
  //   },
  // ];
  return (
    <div className="container">
      <div className="row py-5">

      <h1 className="text-center display-4">Testimonials</h1>
        {reviews.map((testimoni) => (
          <Testimonial testimoni={testimoni} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialInfo;
