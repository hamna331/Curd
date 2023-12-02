import React from "react";
import img from "../assets/admin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,

} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Team() {
    
  return (
    <div className="container-fluid py-5 mb-5 team">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
        >
          <h5 className="text-primary">Our Team</h5>
          <h1>Meet our expert Team</h1>
      
        </div>
        <div className="owl-nav">
    <div className="owl-prev">
        <FontAwesomeIcon icon={faArrowLeft} />
    </div>
    <div className="owl-next">
        <FontAwesomeIcon icon={faArrowRight} />
    </div>
</div>
        <div
          className="owl-carousel team-carousel wow fadeIn"
          data-wow-delay=".5s"
          style={{ display: "flex", overflowX: "auto" }}
        >
          <div className="rounded team-item" style={{ flex: "0 0 auto" }}>
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-circle w-100 ">
                  <img src={img} className="img-fluid w-100 rounded-circle" alt="" />
                </div>
                <div className="team-name text-center py-3">
                  <h4 className="">Full Name</h4>
                  <p className="m-0">Designation</p>
                </div>
                <div className="team-icon d-flex justify-content-center pb-4">
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded team-item" style={{ flex: "0 0 auto" }}>
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-circle w-100">
                  <img src={img} className="img-fluid w-100 rounded-circle" alt="" />
                </div>
                <div className="team-name text-center py-3">
                  <h4 className="">Full Name</h4>
                  <p className="m-0">Designation</p>
                </div>
                <div className="team-icon d-flex justify-content-center pb-4">
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded team-item" style={{ flex: "0 0 auto" }}>
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-circle w-100">
                  <img src={img} className="img-fluid w-100 rounded-circle" alt="" />
                </div>
                <div className="team-name text-center py-3">
                  <h4 className="">Full Name</h4>
                  <p className="m-0">Designation</p>
                </div>
                <div className="team-icon d-flex justify-content-center pb-4">
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded team-item" style={{ flex: "0 0 auto" }}>
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-circle w-100">
                  <img src={img} className="img-fluid w-100 rounded-circle" alt="" />
                </div>
                <div className="team-name text-center py-3">
                  <h4 className="">Full Name</h4>
                  <p className="m-0">Designation</p>
                </div>
                <div className="team-icon d-flex justify-content-center pb-4">
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="btn btn-square btn-success text-white rounded-circle m-1"
                    href=""
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    /* <div ClassName="rounded team-item">
                        <div class="team-content">
                            <div class="team-img-icon">
                                <div class="team-img rounded-circle">
                                    <img src="img/team-2.jpg" class="img-fluid w-100 rounded-circle" alt="">
                                </div>
                                <div class="team-name text-center py-3">
                                    <h4 class="">Full Name</h4>
                                    <p class="m-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex justify-content-center pb-4">
                                    <a class="btn btn-square btn-success text-white rounded-circle m-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded team-item">
                        <div class="team-content">
                            <div class="team-img-icon">
                                <div class="team-img rounded-circle">
                                    <img src="img/team-3.jpg" class="img-fluid w-100 rounded-circle" alt="">
                                </div>
                                <div class="team-name text-center py-3">
                                    <h4 class="">Full Name</h4>
                                    <p class="m-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex justify-content-center pb-4">
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded team-item">
                        <div class="team-content">
                            <div class="team-img-icon">
                                <div class="team-img rounded-circle">
                                    <img src="img/team-4.jpg" class="img-fluid w-100 rounded-circle" alt="">
                                </div>
                                <div class="team-name text-center py-3">
                                    <h4 class="">Full Name</h4>
                                    <p class="m-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex justify-content-center pb-4">
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */
  );
}

export default Team;
