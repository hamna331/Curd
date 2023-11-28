import React from 'react'
import '../Home/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faFileCode,faExternalLinkAlt ,faUserSecret,faEnvelopeOpen,faLaptop} from '@fortawesome/free-solid-svg-icons';

let common = [
    {
        icon: faCode,
        title1: "Web Design",
        title2: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
        btn: "Read More"
    },
    {
        icon: faFileCode,
        title1: "Web Development",
        title2: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
        btn: "Read More"
    },
    {
        icon: faExternalLinkAlt,
        title1: "UI/UX Design",
        title2: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
        btn: "Read More"
    },
    {
        icon: faUserSecret,
        title1: "Web Cecurity",
        title2: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
        btn: "Read More"
    },
    {
        icon: faEnvelopeOpen,
        title1: "Digital Marketing",
        title2: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
        btn: "Read More",
    },
    {
        icon: faLaptop,
        title1: "Programming",
        title2: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
        btn: "Read More"
    }
];



function Services() {
  return (
    <div className="container-fluid services py-5 mb-5">
      <div className="container">
        <div className="text-center mx-auto pb-5" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary fw-bold">Our Services</h5>
          <h1 className='fw-bold'>Services Built Specifically <br />For Your Business</h1>
        </div>
        <div className="row g-5 services-inner">
      { common.map((value,index) =>  (
        <div key={index} className=" col-lg-4 wow fadeIn" data-wow-delay=".5s">
                <div className="services-item bg-light">
                    <div className="p-4 text-center services-content">
                        <div className="services-content-icon">
                        <i className=" fa-7x mb-4 text-primary"><FontAwesomeIcon icon={value.icon} /></i>
                            <h4 className="mb-3">{value.title1}</h4>
                            <p className="mb-4">{value.title2}</p>
                            <a href="" className="btn btn-success text-white px-5 py-3 rounded-pill">{value.btn}</a>
                        </div>
                    </div>
                </div>
            </div>))}
        </div>
    </div>
</div>
  )
}

export default Services
