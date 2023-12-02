import React from "react";
import "../Home/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div
      className="container-fluid footer bg-black wow fadeIn"
      data-wow-delay=".3s"
    >
      <div className="container pt-5 pb-4">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <a href="index.html " style={{ textDecoration: "none" }}>
              <h1 className="text-white fw-bold d-block">
                Bits<span className="text-success">Buffer</span>{" "}
              </h1>
            </a>
            <p className="mt-4 text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              facere delectus qui placeat inventore consectetur repellendus
              optio debitis.
            </p>
            <div className="d-flex hightech-link">
              <a
                href=""
                className="btn-light nav-fill btn btn-square rounded-circle me-2"
              >
                <i className=" text-primary">
                  <FontAwesomeIcon icon={faFacebook} />
                </i>
              </a>
              <a
                href=""
                className="btn-light nav-fill btn btn-square rounded-circle me-2"
              >
                <i className=" text-primary">
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </a>
              <a
                href=""
                className="btn-light nav-fill btn btn-square rounded-circle me-2"
              >
                <i className=" text-primary">
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>
              <a
                href=""
                className="btn-light nav-fill btn btn-square rounded-circle me-0"
              >
                <i className=" text-primary">
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <a
              href="#"
              className="h3 text-success fw-bold"
              style={{ textDecoration: "none" }}
            >
              Short Link
            </a>
            <div className="mt-4 d-flex flex-column short-link">
              <a
                href=""
                className="mb-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                About us
              </a>
              <a
                href=""
                className="mb-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                Contact us
              </a>
              <a
                href=""
                className="mb-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                Our Services
              </a>
              <a
                href=""
                className="mb-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                Our Projects
              </a>
              <a
                href=""
                className="mb-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                Latest Blog
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <a
              href="#"
              className="h3 text-success fw-bold"
              style={{ textDecoration: "none" }}
            >
              Help Link
            </a>
            <div className="mt-4 d-flex flex-column help-link">
              <a
                href=""
                className="mb-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                Terms Of use
              </a>
              <a
                href=""
                className="mb-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                Privacy Policy
              </a>
              <a
                href=""
                className="mb-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                Helps
              </a>
              <a
                href=""
                className="mb-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                FQAs
              </a>
              <a
                href=""
                className="mb-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
                Contact
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <a
              href="#"
              className="h3 text-success fw-bold"
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </a>
            <div className="text-white mt-4 d-flex flex-column contact-link">
              <a
                href="#"
                className="pb-3 text-light border-bottom border-primary"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </i>{" "}
                123 Street, New York, USA
              </a>
              <a
                href="#"
                className="py-3 text-light border-bottom border-primary"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </i>{" "}
                +123 456 7890
              </a>
              <a
                href="#"
                className="py-3 text-light border-bottom border-primary"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>{" "}
                info@exmple.con
              </a>
            </div>
          </div>
        </div>
        <hr className="text-light mt-5 mb-4" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <span className="text-light">
              <a
                href="#"
                className="text-success"
                style={{ textDecoration: "none" }}
              >
                <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faCopyright} />
                </i>
                Your Site Name
              </a>
              , All right reserved.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <span className="text-light">
              Designed By
              <a
                href="https://htmlcodex.com"
                style={{ textDecoration: "none" }}
                className="text-success"
              >
                HTML Codex
              </a>{" "}
              Distributed By{" "}
              <a
                href="https://themewagon.com"
                style={{ textDecoration: "none" }}
              >
                ThemeWagon
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
