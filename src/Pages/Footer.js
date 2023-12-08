import React from 'react'
import './Page.css';
import co1 from '../images/Pages/course-1.jpg'
import co2 from '../images/Pages/course-2.jpg'
import co3 from '../images/Pages/course-3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhone,faAngleRight } from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <>
         <div class="container-fluid bg-footer text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3"  style={{ textDecoration: "none" }}>Quick Link</h4>
                    <a class=" btn-link text-white"  style={{ textDecoration: "none" }} href=""> <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>About Us</a>
                    <a class=" btn-link text-white"  style={{ textDecoration: "none" }} href=""> <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>Contact Us</a>
                    <a class="text-white btn-link"  style={{ textDecoration: "none" }} href=""> <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>Privacy Policy</a>
                    <a class="text-white btn-link"  style={{ textDecoration: "none" }} href=""> <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>Terms & Condition</a>
                    <a class="text-white btn-link"  style={{ textDecoration: "none" }} href=""> <i className=" text-success me-2">
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>FAQs & Help</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Contact</h4>
                    <p class="mb-2">      <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />123 Street, New York, USA</p>
                    <p class="mb-2"><FontAwesomeIcon icon={faPhone} className="me-3" />1+012 345 67890</p>
                    <p class="mb-2"><FontAwesomeIcon icon={faEnvelope} className="me-3" />1info@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href="">                  <FontAwesomeIcon icon={faTwitter} />
</a>
                        <a class="btn btn-outline-light btn-social" href="">                     <FontAwesomeIcon icon={faFacebook} />
</a>
                        <a class="btn btn-outline-light btn-social" href="">                    <FontAwesomeIcon icon={faInstagram} />
</a>
                        <a class="btn btn-outline-light btn-social" href="">                   <FontAwesomeIcon icon={faLinkedin} />
</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Gallery</h4>
                    <div class="row g-2 pt-2">
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src={co1} alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src={co2}alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src={co3} alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src={co2} alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src={co3} alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src={co1} alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div class="position-relative mx-auto" >
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#"  style={{ textDecoration: "none" }}>Your Site Name</a>, All Right Reserved.

                        Designed By <a class="border-bottom" href="https://htmlcodex.com"  style={{ textDecoration: "none" }}>HTML Codex</a><br/><br/>
                        Distributed By <a class="border-bottom"  style={{ textDecoration: "none" }} href="https://themewagon.com">ThemeWagon</a>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                            <a href=""  style={{ textDecoration: "none" }}>Home</a>
                            <a href=""  style={{ textDecoration: "none" }}>Cookies</a>
                            <a href=""  style={{ textDecoration: "none" }}>Help</a>
                            <a href=""  style={{ textDecoration: "none" }}>FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
