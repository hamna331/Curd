import React from 'react'
import '../Home/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faFileCode,faExternalLinkAlt ,faUserSecret,faEnvelopeOpen,faLaptop} from '@fortawesome/free-solid-svg-icons';


function Services() {
  return (
    <div className="container-fluid services py-5 mb-5">
      <div className="container">
        <div className="text-center mx-auto pb-5" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary fw-bold">Our Services</h5>
          <h1 className='fw-bold'>Services Built Specifically <br />For Your Business</h1>
        </div>
        <div className="row g-5 services-inner">
          <div className=" col-lg-4 wow fadeIn" data-wow-delay=".3s">
            <div className="services-item bg-light">
              <div className="p-4 text-center services-content">
                <div className="services-content-icon">
                <i className="mb-4 text-primary"> <FontAwesomeIcon icon={faCode} size="7x"  /></i>
                  <h4 className="mb-3">Web Design</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.
                    Aliquam dolor eget urna ultricies tincidunt.
                  </p>
                  <a href="" className="btn btn-success text-white px-5 py-3 rounded-pill">Read More</a>
                </div>
              </div>
            </div>
          </div>
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".5s">
                <div className="services-item bg-light">
                    <div className="p-4 text-center services-content">
                        <div className="services-content-icon">
                        <i className=" fa-7x mb-4 text-primary"><FontAwesomeIcon icon={faFileCode} /></i>
                            <h4 className="mb-3">Web Development</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                            <a href="" className="btn btn-success text-white px-5 py-3 rounded-pill">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".7s">
                <div className="services-item bg-light">
                    <div className="p-4 text-center services-content">
                        <div className="services-content-icon">
                        <i className=" fa-7x mb-4 text-primary"><FontAwesomeIcon icon={faExternalLinkAlt} /></i>
                            <h4 className="mb-3">UI/UX Design</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                            <a href="" className="btn btn-success text-white px-5 py-3 rounded-pill">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".3s">
                <div className="services-item bg-light">
                    <div className="p-4 text-center services-content">
                        <div className="services-content-icon">
                        <i className=" fa-7x mb-4 text-primary"> <FontAwesomeIcon icon={faUserSecret} /></i>
                            <h4 className="mb-3">Web Cecurity</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                            <a href="" className="btn btn-success text-white px-5 py-3 rounded-pill">Read More</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".5s">
                <div className="services-item bg-light">
                    <div className="p-4 text-center services-content">
                        <div className="services-content-icon">
                        <i className=" fa-7x mb-4 text-primary"> <FontAwesomeIcon icon={faEnvelopeOpen} /></i>
                            <h4 className="mb-3">Digital Marketing</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                            <a href="" className="btn btn-success text-white px-5 py-3 rounded-pill">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".7s">
                <div className="services-item bg-light">
                    <div className="p-4 text-center services-content">
                        <div className="services-content-icon">
                            <i className=" fa-7x mb-4 text-primary"><FontAwesomeIcon icon={faLaptop} />
</i>
                            <h4 className="mb-3">Programming</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                            <a href="" className="btn btn-success text-white px-5 py-3 rounded-pill">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Services
