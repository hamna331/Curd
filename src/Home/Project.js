import React from 'react'
import img3 from '../assets/project-1.jpg'
import img4 from '../assets/project-2.jpg'
import img5 from '../assets/project-3.jpg'
import img6 from '../assets/project-4.jpg'
import img7 from '../assets/project-5.jpg'
import img8 from '../assets/project-6.jpg'

function Project() {
  return (
    <div className="container-fluid project py-5 mb-5">
    <div className="container">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" >
            <h5 className="text-primary fw-bold">Our Project</h5>
            <h1 className='fw-bold'>Our Recently Completed <br /> Projects</h1>
        </div>
        <div className="row g-5">
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".3s">
                <div className="project-item">
                    <div className="project-img">
                        <img src={img3} className="img-fluid w-100 rounded" alt=""/>
                        <div className="project-content">
                            <a href="#" className="text-center">
                                <h4 className="text-success">Web design</h4>
                                <p className="m-0 text-white">Web Analysis</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".5s">
                <div className="project-item">
                    <div className="project-img">
                        <img src={img4} className="img-fluid w-100 rounded" alt=""/>
                        <div className="project-content">
                            <a href="#" className="text-center">
                                <h4 className="text-secondary">Cyber Security</h4>
                                <p className="m-0 text-white">Cyber Security Core</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".7s">
                <div className="project-item">
                    <div className="project-img">
                        <img src={img5} className="img-fluid w-100 rounded" alt=""/>
                        <div className="project-content">
                            <a href="#" className="text-center">
                                <h4 className="text-secondary">Mobile Info</h4>
                                <p className="m-0 text-white">Upcomming Phone</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".3s">
                <div className="project-item">
                    <div className="project-img">
                        <img src={img6} className="img-fluid w-100 rounded" alt=""/>
                        <div className="project-content">
                            <a href="#" className="text-center">
                                <h4 className="text-secondary">Web Development</h4>
                                <p className="m-0 text-white">Web Analysis</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".5s">
                <div className="project-item">
                    <div className="project-img">
                        <img src={img7} className="img-fluid w-100 rounded" alt=""/>
                        <div className="project-content">
                            <a href="#" className="text-center">
                                <h4 className="text-secondary">Digital Marketing</h4>
                                <p className="m-0 text-white">Marketing Analysis</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-4 wow fadeIn" data-wow-delay=".7s">
                <div className="project-item">
                    <div className="project-img">
                        <img src={img8} className="img-fluid w-100 rounded" alt=""/>
                        <div className="project-content">
                            <a href="#" className="text-center">
                                <h4 className="text-secondary">keyword Research</h4>
                                <p className="m-0 text-white">keyword Analysis</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Project
