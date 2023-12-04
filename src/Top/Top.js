import React from 'react';
import { useState } from 'react';
import YourFormComponent from '../Form/Form';
import 'font-awesome/css/font-awesome.min.css';
import { Link, useNavigate } from 'react-router-dom';
import "./Top.css";
import logo from "../../src/assets/logo white name.png"
import icon from "../../src/assets/logo icon.png"

function Top() {

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        console.log("searchQuery", e.target.value);
    };

    const handleSearchSubmit = () => {
        navigate(`/table?search=${encodeURIComponent(searchQuery)}`);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit();
        }
    };


    return (
        <>
            <div className="bg-dark text-white">
                <div className="container-fluid py-2">
                    <div className="row text-center">
                        <div className="col-3">
                            <i className="fa fa-map-marker them-color"></i>{' '}
                            <span className="gary-color">Employees Colony Layyah, Pakistan</span>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-envelope them-color"></i>{' '}
                            <span className="gary-color">hello@bitsbuffer.com</span>
                        </div>
                        <div className="col-2 ">
                            <i className="fa-solid fa-phone them-color"></i>{' '}
                            <span className="gary-color">+92-333-6206009</span>
                        </div>
                        <div className="col-3 gary-color">
                            <div className="marquee-container">
                                <div className="marquee" data-direction="up">
                                    <div className="inner-marquee" data-direction="alternate">
                                        BitsBuffer
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-facebook bg-white them-color p-2 rounded-circle"></i>
                            <i className="fa fa-twitter bg-white them-color p-2 rounded-circle ms-1"></i>
                            <i className="fa fa-instagram bg-white them-color p-2 rounded-circle ms-1"></i>
                            <i className="fa fa-linkedin bg-white them-color p-2 rounded-circle ms-1"></i>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="ps-3 nav-bg-color navbar navbar-expand-lg ">
                <a className="navbar-brand" href="index.html">
                    <img src={icon} alt="icon" style={{ width: "30px", height: "30px" }} className='m-2 icon tada' />
                    <img src={logo} alt="logo" style={{ width: "75px", height: "30px" }} className='m-2 logo' />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto" style={{ textDecoration: 'none', listStyle: 'none', display: 'flex', alignItems: 'center' }}>
                        <li className="nav-item active" style={{ marginRight: '15px' }}>
                            <Link to="/" className='style-non'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" style={{ marginRight: '15px' }}>
                            <Link to="/form" className='style-non'>
                                Form
                            </Link>
                        </li>
                        <li className="nav-item" style={{ marginRight: '15px' }}>
                            <Link to="/table" className='style-non'>
                                Table
                            </Link>
                        </li>
                        <li className="nav-item" style={{ marginRight: '15px' }}>
                            <Link to="/Page" className='style-non'>
                                Pages
                            </Link>
                        </li>
                        {/* <li className="nav-item" style={{ marginRight: '15px' }}>
                            <Link to="/card" className='style-non'>
                                Card
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/yourForm" className='style-non'>
                                Your Form
                            </Link>
                        </li> */}
                        <li className="nav-item ms-3">
                            <Link to="/shop" className='style-non'>
                                Shop
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className="d-flex text-end">
                    <input
                        className="form-control search-input "
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="btn btn-search  me-5 text-white" onClick={handleSearchSubmit}>
                        Search
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Top;
