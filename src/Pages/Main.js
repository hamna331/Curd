import React, { useState, useEffect } from 'react';
import './Page.css'; // Importing the CSS file
import img1 from "../images/Pages/carousel-1.jpg";
import img2 from "../images/Pages/carousel-2.jpg";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2]; // Replace with your image URLs
  const titles = ['Get Educated Online From Your Home', 'The Best Online Learning Platform']; // Replace with titles for each image
  const descriptions = ['Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.', 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.']; // Replace with descriptions for each image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container-fluid p-0 mb-5">
      <div className="position-relative">
        <img className="img-fluid w-100 h-50" src={images[currentSlide]} alt="" style={{ opacity: '0.7' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-sm-10 col-lg-8">
                <h5 className="text-primary fw-bold text-uppercase mb-3">
                  Best Online Courses
                </h5>
                <h1 className="display-3 text-dark animated slideInDown fw-bold ">
                  {titles[currentSlide]}
                </h1>
                <p className="fs-5 fw-bold  mb-4 pb-2 text-dark animated slideInDown">
                  {descriptions[currentSlide]}
                </p>
                <a href="" className="btn btn-primary fw-bold py-md-3 px-md-5 me-3">
                  Read More
                </a>
                <a href="" className="btn btn-light fw-bold py-md-3 px-md-5">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
