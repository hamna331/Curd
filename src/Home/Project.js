import React from 'react'
import img3 from '../assets/project-1.jpg'
import img4 from '../assets/project-2.jpg'
import img5 from '../assets/project-3.jpg'
import img6 from '../assets/project-4.jpg'
import img7 from '../assets/project-5.jpg'
import img8 from '../assets/project-6.jpg'

const Sdata = [
    {
        imgsrc: img3,
        title1: "Web design",
        title2: "Web Analysis",
    },
    {
        imgsrc: img4,
        title1: "Cyber Security",
        title2: "Cyber Security Core",
    },
    {
        imgsrc: img5,
        title1: "Mobile Info",
        title2: "Upcomming Phone",
    },
    {
        imgsrc: img6,
        title1: "Web Development",
        title2: "Web Analysis",
    },
    {
        imgsrc: img7,
        title1: "Digital Marketing",
        title2: "Marketing Analysis",
    },
    {
        imgsrc: img8,
        title1: "keyword Research",
        title2: "keyword Analysis",
    },
];

function Project() {
  return (
    <div className="container-fluid project py-5 mb-5">
            <div className="container">
            <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" >
                    <h5 className="text-primary fw-bold">Our Project</h5>
                    <h1 className='fw-bold'>Our Recently Completed <br /> Projects</h1>
                </div>
                <div className="row g-5">
                    {Sdata.map((value, index) => (
                        <div key={index} className="col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src={value.imgsrc} className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-success fw-bold">{value.title1}</h4>
                                            <p className="m-0 text-white fw-bold">{value.title2}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
    export default Project
