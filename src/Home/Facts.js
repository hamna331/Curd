import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Home/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/testimonial-1.jpg";
import img2 from "../assets/testimonial-2.jpg";
import img3 from "../assets/testimonial-3.jpg";
import img4 from "../assets/testimonial-4.jpg";

const Data = [
  {
    imgsrc: img,
    title: "Client Name",
    title2: "Profession",
    icon1: faStar,
  },
  {
    imgsrc: img2,
    title: "Client Name",
    title2: "Profession",
    icon1: faStar,
  },
  {
    imgsrc: img3,
    title: "Client Name",
    title2: "Profession",
    icon1: faStar,
  },
  {
    imgsrc: img4,
    title: "Client Name",
    title2: "Profession",
    icon1: faStar,
  },
];

function Facts() {
  return (
    <div className="container-fluid testimonial py-5 mb-5">
      <div className="container">
        <div className="text-center mx-auto  wow fadeIn" data-wow-delay=".3s">
          <h5 className="text-primary fw-bold">Our Testimonial</h5>
          <h1 className="fw-bold">Our Client Saying!</h1>
        </div>
        <div
          className="owl-carousel testimonial-carousel wow fadeIn"
          data-wow-delay=".5s"
        >
          <div className="row">
            {Data.map((value, index) => (
              <div className="col-lg-4 gy-5 ">
                <div className="testimonial-item border p-4">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={value.imgsrc} alt="" />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-secondary">{value.title}</h4>
                      <p className="m-0 pb-3">{value.title2}</p>
                      <div className="d-flex pe-5">
                        <i className=" me-1 text-primary">
                          <FontAwesomeIcon icon={value.icon1} />
                        </i>
                        <i className=" me-1 text-primary">
                          <FontAwesomeIcon icon={value.icon1} />
                        </i>
                        <i className=" me-1 text-primary">
                          <FontAwesomeIcon icon={value.icon1} />
                        </i>
                        <i className=" me-1 text-primary">
                          <FontAwesomeIcon icon={value.icon1} />
                        </i>
                        <i className=" me-1 text-primary">
                          <FontAwesomeIcon icon={value.icon1} />
                        </i>

                        {/* You can repeat the above line for each star */}
                      </div>
                    </div>
                  </div>
                  <div className="border-top  pt-3">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet elit. Sed efficitur quis purus
                      ut interdum aliquam dolor eget urna. Nam volutpat libero
                      sit amet leo cursus, ac viverra eros morbi quis quam mi.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
