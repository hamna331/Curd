import React from 'react';
import { useState } from 'react';
import YourFormComponent from '../Form/Form';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';


function Top() {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        // Update the searchQuery state with the input value
        setSearchQuery(e.target.value);
    };
    return (
        <>
            <div className="bg-dark mt-0">
                <div className="container">
                    <div className="row text-white align-items-center">
                        <div className="col-3">
                            <i className="fa fa-map-marker them-color"></i>{' '}
                            <span className="gary-color">Employees Colony Layyah, Pakistan</span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-envelope them-color"></i>{' '}
                            <span className="gary-color">hello@bitsbuffer.com</span>
                        </div>
                        <div className="col-4 gary-color">
                            <marquee>This text will scroll from right to left</marquee>
                            <div className="row">
                                <div className="col-6">
                                    <marquee direction="up">This text up</marquee>
                                </div>
                                <div className="col-6">
                                    <marquee direction="down">This text down</marquee>
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
            <header className="header-area header-sticky">
                <div className="row ">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="index.html">
                            BitsBuffer
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
                                    <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginRight: '15px' }}>
                                    <Link to="/form" style={{ color: 'black', textDecoration: 'none' }}>
                                        Form
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginRight: '15px' }}>
                                    <Link to="/table" style={{ color: 'black', textDecoration: 'none' }}>
                                        Table
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginRight: '15px' }}>
                                    <Link to="/card" style={{ color: 'black', textDecoration: 'none' }}>
                                        Card
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/yourForm" style={{ color: 'black', textDecoration: 'none' }}>
                                        Your Form
                                    </Link>
                                </li>
                            </ul>
                            <div className="ml-auto mt-1">
                                {/* <form className="form-inline" onSubmit={handleSearch}> */}
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                                {/* </form> */}
                            </div>
                        </div>
                    </nav>
                </div>
                {/* <YourFormComponent searchQuery={searchQuery} /> */}
            </header>
        </>


    );
}

export default Top;
