import React from 'react';
import '../Home/Home.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import team2Img from '../assets/asdf2.jpg';
import team4Img from '../assets/asdf1.jpg';
import Testimonials from './Testimonials';
import About from './About';
import Services from './Services';
import Project from './Project';
import Blog from './Blog';
import Team from './Team';
import Facts from './Facts';
import Contact from './Contact';
import Footer from './Footer';


const Home = () => {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Programmatically move to the next slide
  //     const carousel = document.getElementById('carouselId');
  //     const currentIndex = parseInt(carousel.querySelector('.active').getAttribute('data-bs-slide-to'));
  //     const nextIndex = (currentIndex + 1) % 2; // Adjust the number based on the number of slides

  //     carousel.querySelector(`[data-bs-slide-to="${currentIndex}"]`).classList.remove('active');
  //     carousel.querySelector(`[data-bs-slide-to="${nextIndex}"]`).classList.add('active');
  //     carousel.querySelector('.carousel-inner').style.transform = `translateX(-${nextIndex * 100}%)`;
  //   }, 5000);

  //   // Clear the interval when the component is unmounted
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <div className="container-fluid px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={team2Img} className="img-fluid" style={{ maxHeight: '100vh', maxWidth: '100vw', width: '100%', height: 'auto', }} alt="First slide" />
              <div className="carousel-caption">
                <div className="container carousel-content">
                  <h6 className="text-secondary h4 animated fadeInUp mt-5 text-success" style={{ marginBottom: '10px' }}>Best IT Solutions</h6>
                  <h1 className="text-white display-1 mb-4 animated fadeInRight">An Innovative IT Solutions Agency</h1>
                  {/* <h1 className="text-white display-1 mb-4 animated fadeInRight">An Innovative IT Solutions Agency</h1> */}
                  <p className="mb-4 text-white fs-5 animated fadeInDown mt-5">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                  <a href="" className="me-2"><button type="button" className="px-4 py-2 px-sm-5 btn btn-success rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                  <a href="" className="ms-2"><button type="button" className="px-4 py-2 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <img src={team4Img} className="img-fluid" style={{ maxHeight: '100vh', maxWidth: '100vw', width: '100%', height: 'auto' }} alt="First slide" />
              <div className="carousel-caption">
                <div className="container carousel-content">
                  <h6 className="text-secondary h4 animated fadeInUp" style={{ marginTop: '0px !important' }}>Best IT Solutions</h6>
                  <h1 className="text-white display-1 mb-4 animated fadeInLeft">Quality Digital Services You Really Need!</h1>
                  <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                  <a href="" className="me-2"><button type="button" className="px-4 py-2 px-sm-5 btn btn-success rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                  <a href="" className="ms-2"><button type="button" className="px-4 py-2 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Testimonials/>
      <About/>
      <Services/>
      <Project/>
      <Blog/>
      <Team/>
      <Facts/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;