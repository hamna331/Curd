import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faFacebook,faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import img1 from "../assets/blog-1.jpg";
import img2 from "../assets/blog-2.jpg";
import img3 from "../assets/blog-3.jpg";

const common = [
  {
    imgsrc: img1,
    title: 'web design',
    btn: 'read more',
    title2: 'share',
    icon1: <faArrowRight/>,
    icon2: faFacebook,
    icon3: faTwitter,
    icon4: faInstagram,
    title3: 'By Daniel Martin',
    date: '24 March 2023',
    title4: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus utinterdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet',
    title5: '5324 Share',
    icon5: faComment,
    icon6: faShare,
    title6: '5 comments'
  },
  {
    imgsrc: img2,
    title: 'web design',
    btn: 'read more',
    title2: 'share',
    icon1: <faArrowRight/>,
    icon2: faFacebook,
    icon3: faTwitter,
    icon4: faInstagram,
    title3: 'By Daniel Martin',
    date: '24 March 2023',
    title4: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus utinterdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet',
    title5: '5324 Share',
    icon5: faComment,
    icon6: faShare,
    title6: '5 comments'
  }
];


function Blog() {
  return (
    <div className="container-fluid blog py-5 mb-5">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-primary fw-bold">Our Blog</h5>
          <h1 className='fw-bold'>Latest Blog & News</h1>
        </div>
        <div className="row g-5 justify-content-center">
        {common.map((value,index) =>(
          <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".3s">
            <div className="blog-item position-relative bg-light rounded">
              <img src={value.imgsrc} className="img-fluid w-100 rounded-top" alt="" />
              <span
                className="position-absolute px-4 py-3 bg-primary text-white rounded"
                style={{ top: "-28px", right: "20px" }}
              >
                {value.title}
              </span>
              <div
                className="blog-btn d-flex justify-content-between position-relative px-3"
                style={{ marginTop: "-75px" }}
              >
                <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                  <a href="" className="btn text-white">
                   {value.btn}
                  </a>
                </div>
                <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                  <div className="blog-icon-1">
                    <p className="text-white px-2">
                      {value.title2}<i className=" ms-3"><FontAwesomeIcon icon={value.icon1} /></i>
                    </p>
                  </div>
                  <div className="blog-icon-2">
                    <a href="" className="btn me-1">
                      <i className=" text-white"><FontAwesomeIcon icon={value.icon2} /></i>
                    </a>
                    <a href="" className="btn me-1">
                      <i className=" text-white"><FontAwesomeIcon icon={value.icon3} /></i>
                    </a>
                    <a href="" className="btn me-1">
                      <i className=" text-white"><FontAwesomeIcon icon={value.icon4}/> </i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="blog-content text-center position-relative px-3"
                style={{ marginTop: "-25px" }}
              >
                <img
                  src={value.imgsrc}
                  className="img-fluid rounded-circle border border-4 border-white mb-3"
                  alt=""
                />
                <h5 className="">{value.title3}</h5>
                <span className="text-secondary">{value.date}</span>
                <p className="py-2">
                 {value.title4}
                </p>
              </div>
              <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                <a href="" className="text-white">
                  <small>
                    <i className=" me-2 text-secondary"><FontAwesomeIcon icon={value.icon5} /></i>{value.title5}
                  </small>
                </a>
                <a href="" className="text-white">
                  <small>
                    <i className=" me-2 text-secondary"><FontAwesomeIcon icon={value.icon6} /></i>{value.title6}
                  </small>
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
