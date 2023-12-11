import React from "react";
import img1 from "../images/Pages/testimonial-1.jpg";
import img2 from "../images/Pages/testimonial-2.jpg";
import img3 from "../images/Pages/testimonial-3.jpg";
import img4 from "../images/Pages/testimonial-4.jpg";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Page.css";

const client = [
  {
    imgsrc: img1,
    title1: "Client name",
    title2: "Profession",
    Description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },

  {
    imgsrc: img2,
    title1: "Client name",
    title2: "Profession",
    Description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    imgsrc: img3,
    title1: "Client name",
    title2: "Profession",
    Description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },

  // ... (other objects in client array)
];

const client2 = [
  {
    imgsrc: img4,
    title1: "Client name",
    title2: "Profession",
    Description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    imgsrc: img1,
    title1: "Client name",
    title2: "Profession",
    Description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    imgsrc: img2,
    title1: "Client name",
    title2: "Profession",
    Description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  // ... (other objects in client2 array)
];

const MultiItemCarousel = () => {
  return (
    <div className="container ">
      <Carousel>
        <Carousel.Item className="custom-carousel-item">
          <Row>
            {client.map(
              (
                item,
                index // Added index for key prop
              ) => (
                <Col>
                  <div className="image-fluid d-flex justify-content-center">
                    <img
                      className="rounded-circle w-50 img-fluid"
                      src={item.imgsrc}
                      alt={`Item ${item}`} // Changed alt text
                    />
                  </div>
                  <h5 className=" text-custom d-flex justify-content-center ">
                    {item.title1}
                  </h5>
                  <p className=" text-custom d-flex justify-content-center">
                    {item.title2}
                  </p>
                  <p className=" text-custom d-flex justify-content-center text-center">
                    {item.Description}
                  </p>
                </Col>
              )
            )}
          </Row>
        </Carousel.Item>

        <Carousel.Item className="custom-carousel-item">
          <Row>
            {client2.map((item, index) => (
              <Col key={index}>
                <div className="image-fluid d-flex justify-content-center">
                  <img
                    className="rounded-circle w-50 img-fluid "
                    src={item.imgsrc}
                    alt={`Item ${item}`}
                  />
                </div>
                <h5 className=" text-custom d-flex justify-content-center">
                  {item.title1}
                </h5>
                <p className=" text-custom d-flex justify-content-center">
                  {item.title2}
                </p>
                <p className=" text-custom d-flex justify-content-center text-center">
                  {item.Description}
                </p>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MultiItemCarousel;
