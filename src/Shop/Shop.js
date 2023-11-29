import React, { useState } from "react";
import "../Shop/shop.css";
import wom from "../assets/team-3.jpg";
import man from "../assets/team-2.jpg";
import kid from "../images/img4.jpg";
import Sdata from "../Shop/Shoplist";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

function Shop() {
  const [categoryFilter, setCategoryFilter] = useState("all"); // Initialize state for category filtering
  const [clicked, setClicked] = useState(false);

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category); // Update category filter state
    setClicked(!clicked);
  };

  const filteredData =
    categoryFilter === "all"
      ? Sdata
      : Sdata.filter((item) => item.category === categoryFilter);
  return (
    <div>
      <div className="container mt-60">
        <h2 className="justify-content-center text-dark">Shop by Category</h2>
      </div>
      <div className="container mb-5">
        <div className="row d-flex">
          <div className="col-md-12 col-lg-3">
            {/* Update the 'to' attribute with the appropriate route */}
            <NavLink className="navlink images-fluid" to="">
              {/* Replace 'wom' with the correct image source */}
              <img src={wom} className="rounded-circle image " alt="" />
              <h2 className="text-dark" style={{ textDecoration: "none" }}>
                <button
                  className={`btn ${
                    clicked ? "btn-dark" : "btn-success"
                  } text-white px-5 py-3 rounded-pill`}
                  onClick={() => handleCategoryFilter("woman")}
                >
                  Women
                </button>
              </h2>
            </NavLink>
          </div>
          <div className="col-md-12 col-lg-3">
            {/* Update the 'to' attribute with the appropriate route */}
            <NavLink className="navlink images-fluid" to="">
              {/* Replace 'wom' with the correct image source */}
              <img src={man} className="rounded-circle  image" alt="" />
              <h2 className="text-dark" style={{ textDecoration: "none" }}>
                <button
                  className={`btn ${
                    clicked ? "btn-dark" : "btn-success"
                  } text-white px-5 py-3 rounded-pill`}
                  onClick={() => handleCategoryFilter("woman")}
                >
                  men
                </button>
              </h2>
            </NavLink>
          </div>
          <div className="col-md-12 col-lg-3">
            {/* Update the 'to' attribute with the appropriate route */}
            <NavLink className="navlink images-fluid" to="">
              {/* Replace 'wom' with the correct image source */}
              <img src={kid} className="rounded-circle image " alt="" />
              <h2 className="text-dark" style={{ textDecoration: "none" }}>
                <button
                  className={`btn ${
                    clicked ? "btn-dark" : "btn-success"
                  } text-white px-5 py-3 rounded-pill`}
                  onClick={() => handleCategoryFilter("woman")}
                >
                  kid
                </button>{" "}
              </h2>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-fluid p-3 card-body bg-secondary">
        <div className="container">
          <div className="row">
            {filteredData.map((val, ind) => (
              <div className="col-lg-3 m-0 " key={ind}>
                <img
                  src={val.imgsrc}
                  alt={val.title}
                  className="image-fluid-1"
                />
                <div className="p-4 text-center services-content ">
                  <h4 className="mb-3">{val.title}</h4>
                  {/* <p className="mb-4">{value.title2}</p> */}
                  <a
                    href=""
                    className="btn btn-success text-white px-5 py-3 rounded-pill"
                  >
                    {val.btn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
