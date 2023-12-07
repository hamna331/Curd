import React from 'react'
import './Page.css'; // Importing the CSS file
import cat1 from '../images/Pages/cat-1.jpg'
import cat2 from '../images/Pages/cat-2.jpg'
import cat3 from '../images/Pages/cat-3.jpg'
import cat4 from '../images/Pages/cat-4.jpg'


function Categories() {
  return (
    
    <div class="container-xxl py-5 category">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3 fw-bold">Categories</h6>
                <h1 class="mb-5">Courses Categories</h1>
            </div>
            <div class="row g-3">
                <div class="col-lg-7 col-md-6">
                    <div class="row g-3">
                        <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <a class="position-relative d-block overflow-hidden" href="">
                                <img class="img-fluid" src={cat1} alt=""/>
                                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                                    <h5 class="m-0">Web Design</h5>
                                    <small class="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a class="position-relative d-block overflow-hidden" href="">
                                <img class="img-fluid" src={cat2} alt=""/>
                                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                                    <h5 class="m-0">Graphic Design</h5>
                                    <small class="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a class="position-relative d-block overflow-hidden" href="">
                                <img class="img-fluid" src={cat3} alt=""/>
                                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                                    <h5 class="m-0">Video Editing</h5>
                                    <small class="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" >
                    <a class="position-relative d-block h-100 overflow-hidden" href="">
                        <img class="img-fluid position-absolute w-100 h-100" src={cat4}alt="" />
                        <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                            <h5 class="m-0">Online Marketing</h5>
                            <small class="text-primary">49 Courses</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories
