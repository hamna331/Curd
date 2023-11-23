import React from 'react';
import './Top.css';

function Top() {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
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
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#top">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="meetings.html">
                                            Meetings
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#apply">
                                            Apply Now
                                        </a>
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="pagesDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Pages
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                            <a className="dropdown-item" href="meetings.html">
                                                Upcoming Meetings
                                            </a>
                                            <a className="dropdown-item" href="meeting-details.html">
                                                Meeting Details
                                            </a>
                                        </div>
                                    </li> */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#courses">
                                            Courses
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Top;
