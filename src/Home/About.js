import React from "react";
import img1 from "../assets/about-1.jpg";
import img2 from "../assets/about-2.jpg";
import "./Home.css"; // Replace with your CSS file path

function About() {
  return (
    <div className="container-fluid py-5 my-5">
      <div className="container pt-2">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="h-100 position-relative">
              <div className="position-absolute w-100">
                <img
                  src={img2}
                  className="img-fluid rounded fadeIn"
                  alt=""
                  style={{ width: "50%" }}
                />
              </div>
              <div
                className="position-absolute w-100"
                style={{
                  top: "75%",
                  left: "80%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src={img1}
                  className="img-fluid rounded fadeIn"
                  alt=""
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </div>

          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            <h5 className="text-primary fw-bold">About Us</h5>
            <h1 className="mb-4">
              About HighTech Agency And Its Innovative IT Solutions
            </h1>
            <p className=" text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur quis purus ut interdum...
            </p>
            <p className="mb-4  text-gray">
              Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam
              volutpat libero sit amet leo cursus...
            </p>
            <a
              href=""
              className="btn btn-success rounded-pill px-5 py-3 text-white"
            >
              More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
