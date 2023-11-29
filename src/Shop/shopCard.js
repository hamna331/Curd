import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import authorImageSrc from '../assets/team2Img';

const BootstrapCard = ({ category, imageSrc, authorName, date, content }) => {
  return (
    <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".3s">
      <Card className="blog-item position-relative bg-light rounded">
        <Card.Img variant="top" src={imageSrc} className="img-fluid rounded-top" alt="" />
        <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{ top: '-28px', right: '20px' }}>
          {category}
        </span>
        <Card.Body className="blog-btn d-flex justify-content-between position-relative px-3" style={{ marginTop: '-75px' }}>
          <Card.Text className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
            <a href="" className="btn text-white">Read More</a>
          </Card.Text>
          <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
            <div className="blog-icon-1">
              <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
            </div>
            <div className="blog-icon-2">
              <a href="" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
              <a href="" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
              <a href="" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
            </div>
          </div>
        </Card.Body>
        <Card.Body className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px' }}>
          <Card.Img src={authorImageSrc} className="img-fluid rounded-circle border border-4 border-white mb-3 w-25 h-25" alt="" />
          <Card.Title>{authorName}</Card.Title>
          <Card.Text className="text-secondary">{date}</Card.Text>
          <Card.Text className="py-2">{content}</Card.Text>
        </Card.Body>
        <Card.Footer className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
          <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
          <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default BootstrapCard;
