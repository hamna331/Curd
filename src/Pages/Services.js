import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import img3 from '../images/Pages/about.jpg'
import '../Pages/Page.css'
function Services() {
  return (
    <><div className="container-xxl py-5">
          <div className="container">
              <div className="row g-4">
                  <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="service-item text-center pt-3">
                          <div className="p-4">
                              <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                              <h5 className="mb-3">Skilled Instructors</h5>
                              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 wow fadeInUp " data-wow-delay="0.3s">
                      <div className="service-item text-center  pt-3">
                          <div className="p-4">
                              <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                              <h5 className="mb-3">Online Classes</h5>
                              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 wow fadeInUp " data-wow-delay="0.5s">
                      <div className="service-item text-center pt-3">
                          <div className="p-4">
                              <i className="fa fa-3x fa-home text-primary mb-4"></i>
                              <h5 className="mb-3">Home Projects</h5>
                              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                      <div className="service-item text-center pt-3">
                          <div className="p-4">
                          <FontAwesomeIcon icon={faBookOpen} className="fa-3x text-primary mb-4" />                              <h5 className="mb-3">Book Library</h5>
                              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container-xxl py-5">
              <div className="container">
                  <div className="row g-5">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                          <div className="position-relative h-100">
                              <img className="img3 w-100" src={img3} alt="" />
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                          <h6 className="section-title bg-white text-start text-primary pe-3 fw-bold">About Us</h6>
                          <h1 className="mb-4 fw-bold">Welcome to eLEARNING</h1>
                          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                          <div className="row gy-2 gx-4 mb-4">
                              <div className="col-sm-6">
                                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                              </div>
                              <div className="col-sm-6">
                                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                              </div>
                              <div className="col-sm-6">
                                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                              </div>
                              <div className="col-sm-6">
                                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                              </div>
                              <div className="col-sm-6">
                                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                              </div>
                              <div className="col-sm-6">
                                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                              </div>
                          </div>
                          <a className="btn btn-primary py-3 px-5 mt-2" href="#">Read More</a>
                      </div>
                  </div>
              </div>
          </div></>
    
  )
}

export default Services
