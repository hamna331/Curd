import React from "react";
import { useEffect, useState } from "react";
import img from "../assets/admin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const team = [
  {
    imgsrc: img,
    title: "",
    title2: "",
    icon1: faFacebook,
    icon2: faTwitter,
    icon3: faInstagram,
    icon4: faLinkedin,
  },
  {
    imgsrc: img,
    title: "",
    title2: "",
    icon1: faFacebook,
    icon2: faTwitter,
    icon3: faInstagram,
    icon4: faLinkedin,
  },
  {
    imgsrc: img,
    title: "",
    title2: "",
    icon1: faFacebook,
    icon2: faTwitter,
    icon3: faInstagram,
    icon4: faLinkedin,
  },
  {
    imgsrc: img,
    title: "",
    title2: "",
    icon1: faFacebook,
    icon2: faTwitter,
    icon3: faInstagram,
    icon4: faLinkedin,
  },
  {
    imgsrc: img,
    title: "",
    title2: "",
    icon1: faFacebook,
    icon2: faTwitter,
    icon3: faInstagram,
    icon4: faLinkedin,
  },
  {
    imgsrc: img,
    title: "",
    title2: "",
    icon1: faFacebook,
    icon2: faTwitter,
    icon3: faInstagram,
    icon4: faLinkedin,
  },
];

function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const nextIndex = (activeIndex + 1) % team.length;
  //     setActiveIndex(nextIndex);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [activeIndex, team.length]);

  const itemsPerPage = 4;
  const totalItems = team.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderCarouselItems = () => {
    const items = [];

    for (let i = 0; i < totalPages; i++) {
      const startIndex = i * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

      items.push(
        <div
          key={i}
          className={`carousel-item ${i === activeIndex ? "active" : ""}`}
        >
          <div className="row">
            {team.slice(startIndex, endIndex).map((value, index) => (
              <div key={index} className="col-md-3">
                <div
                  className="rounded team-item m-3"
                  style={{ flex: "0 0 auto" }}
                >
                  <div className="team-content">
                    <div className="team-img-icon">
                      <div className="team-img rounded-circle w-100 ">
                        <img
                          src={value.imgsrc}
                          className="img-fluid w-100 rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="team-name text-center py-3">
                        <h4 className="">{value.fullName}</h4>
                        <p className="m-0">{value.designation}</p>
                      </div>
                      <div className="team-icon d-flex justify-content-center pb-4">
                        <a
                          className="btn btn-square btn-success text-white rounded-circle m-1"
                          href=""
                        >
                          <FontAwesomeIcon icon={value.icon1} />
                        </a>
                        <a
                          className="btn btn-square btn-success text-white rounded-circle m-1"
                          href=""
                        >
                          <FontAwesomeIcon icon={value.icon2} />
                        </a>
                        <a
                          className="btn btn-square btn-success text-white rounded-circle m-1"
                          href=""
                        >
                          <FontAwesomeIcon icon={value.icon3} />
                        </a>
                        <a
                          className="btn btn-square btn-success text-white rounded-circle m-1"
                          href=""
                        >
                          <FontAwesomeIcon icon={value.icon4} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return items;
  };

  return (
    <div className="container-fluid py-5 mb-5 team">
      <div className="container" style={{ height: "500px" }}>
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
          id="teamCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          {renderCarouselItems()}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
