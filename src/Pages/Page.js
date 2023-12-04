import React from "react";
import CarouselComponent from "./Main";
import Services from "./Services";
import Categories from "./Categories";
// import './Page.css';
import img1 from "../images/Pages/carousel-1.jpg";
import img2 from "../images/Pages/carousel-2.jpg";

function Page() {
  return (
    <>
     <nav ClassName="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="" ClassName="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 ClassName="m-0 text-primary"><i ClassName="fa fa-book me-3"></i>eLEARNING</h2>
        </a>
        <button type="button" ClassName="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span ClassName="navbar-toggler-icon"></span>
        </button>
        <div ClassName="collapse navbar-collapse" id="navbarCollapse">
            <div ClassName="navbar-nav ms-auto p-4 p-lg-0">
                <a href="" ClassName="nav-item nav-link active fw-bold m-2 ">Home</a>
                <a href="about.html" ClassName="nav-item nav-link fw-bold m-2">About</a>
                <a href="courses.html" ClassName="nav-item nav-link fw-bold m-2">Courses</a>
                <div ClassName="nav-item dropdown">
                    <a href="#" ClassName="nav-link dropdown-toggle" data-bs-toggle="dropdown fw-bold m-2">Pages</a>
                    <div ClassName="dropdown-menu fade-down m-0">
                        <a href="team.html" ClassName="dropdown-item">Our Team</a>
                        <a href="testimonial.html" ClassName="dropdown-item">Testimonial</a>
                        <a href="404.html" ClassName="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" ClassName="nav-item nav-link fw-bold m-2">Contact</a>
            </div>
            <a href="" ClassName="btn btn-primary py-4 px-lg-5 d-none d-lg-block fw-bold m-2">Join Now<i ClassName="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
      {/* ..////////////hero */}
      {/* <div className="container-fluid p-0 mb-5">
        <div className="owl-carousel header-carousel position-relative">
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid  w-100 h-50" src={img1} alt="" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5 className="text-primary  fw-bold text-uppercase mb-3 animated slideInDown">
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 fw-bold text-white animated slideInDown">
                      The Best Online Learning Platform
                    </h1>
                    <p className="fs-5 fw-boldtext-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd
                      rebum sea sanctus eirmod elitr.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary fw-bold py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Read More
                    </a>
                    <a
                      href=""
                      className="btn btn-light fw-bold py-md-3 px-md-5 animated slideInRight"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src={img2} alt="" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 text-white animated slideInDown">
                      Get Educated Online From Your Home
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd
                      rebum sea sanctus eirmod elitr.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Read More
                    </a>
                    <a
                      href=""
                      className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <CarouselComponent/>
      <Services/>
      <Categories/>
    </>
  );
}

export default Page;
