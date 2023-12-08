import React from "react";
import team1 from "../images/Pages/team-1.jpg";
import team2 from "../images/Pages/team-2.jpg";
import team3 from "../images/Pages/team-3.jpg";
import team4 from "../images/Pages/team-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import './Page.css';


const team = [
  {
    imgsrc: team1,
    icon1: faFacebook,
    icon2: faTwitter,
    icon3: faInstagram,
    title1: "Instructor name",
    title2: "Designation",
  },
  {
    imgsrc: team2,
    icon1: faFacebook,
    icon2: faTwitter,
    icon3: faInstagram,
    title1: "Instructor name",
    title2: "Designation",
  },
  {
    imgsrc: team3,
    icon1: faFacebook,
    icon2: faTwitter,
    icon3: faInstagram,
    title1: "Instructor name",
    title2: "Designation",
  },
  {
    imgsrc: team4,
    icon1: faFacebook,
    icon2: faTwitter,
    icon3: faInstagram,
    title1: "Instructor name",
    title2: "Designation",
  },
];
function Team() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title fw-bold bg-white text-center text-primary px-3">
              Instructors
            </h6>
            <h1 className="mb-5 fw-bold">Expert Instructors</h1>
          </div>
          <div className="row g-4">
            {team.map((val, ind) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={ind}
              >
                <div className="team-item bg-light">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={val.imgsrc} alt="" />
                  </div>
                  <div className="position-relative d-flex justify-content-center">
                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                      <a className="btn btn-sm-square btn-primary mx-1" href="">
                        <FontAwesomeIcon icon={val.icon1} />
                      </a>
                      <a className="btn btn-sm-square btn-primary mx-1" href="">
                        <FontAwesomeIcon icon={val.icon2} />
                      </a>
                      <a className="btn btn-sm-square btn-primary mx-1" href="">
                        <FontAwesomeIcon icon={val.icon3} />
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">{val.title1}</h5>
                    <small>{val.title2}</small>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={team2} alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" >
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={team3} alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" >
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={team4} alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" >
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
