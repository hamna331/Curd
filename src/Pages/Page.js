import React from "react";
import CarouselComponent from "./Main";
import Services from "./Services";
import Categories from "./Categories";
import "./Page.css";
import Courses from "./Courses";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Page() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-book me-3"></i>eLEARNING
          </h2>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active fw-bold m-2">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link fw-bold m-2">
              About
            </a>
            <a href="courses.html" className="nav-item nav-link fw-bold m-2">
              Courses
            </a>
            <div className="nav-item">
              <a
                href="#"
                className="nav-link  fw-bold m-2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul
                className="dropdown-menu fade-down m-0"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link to="/Team" className="dropdown-item">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                </li>
                <li>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </li>
              </ul>
            </div>
            <Link to="/contact" className="nav-item nav-link fw-bold m-2">
              Contact
            </Link>
          </div>
          <a
            href="/"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block fw-bold m-2"
          >
            Join Now<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>

      <CarouselComponent />
      <Services />
      <Categories />
      <Courses />
      <Team />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Page;
