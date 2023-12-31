import React, { useState } from "react";
import "../Shop/shop.css";
import wom from "../assets/team-3.jpg";
import man from "../assets/team-2.jpg";
import kid from "../images/img4.jpg";
import Sdata from "../Shop/list";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { Link, useHistory } from "react-router-dom";


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
    <div className="bg-dark py-5">
      <div className="container bg-light rounded">
        <h2 className="text-dark text-center pt-3">Shop by Category</h2>
        <div className="row my-5 pb-5 text-center border-bottom">
          <div className="col-lg-4 col-md-6 col-sm-12 border-hover " onClick={() => handleCategoryFilter("woman")}>
            <NavLink className="navlink images-fluid" to="">
              <img src={wom} className="rounded-circle image " alt="" />
              <h2 className="text-dark" style={{ textDecoration: "none" }}>
                <button className="btn btn-success text-white px-5 py-3 rounded-pill" onClick={() => handleCategoryFilter("woman")}>Women</button>
              </h2>
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 border-hover" onClick={() => handleCategoryFilter("man")}>
            <NavLink className="navlink images-fluid" to="">
              <img src={man} className="rounded-circle  image" alt="" />
              <h2 className="text-dark" style={{ textDecoration: "none" }}>
                <button className="btn btn-success text-white px-5 py-3 rounded-pill" onClick={() => handleCategoryFilter("man")}>Men</button>
              </h2>
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 border-hover" onClick={() => handleCategoryFilter("kid")}>
            <NavLink className="navlink images-fluid" to="">
              <img src={kid} className="rounded-circle image" alt="" />
              <h2 className="text-dark" style={{ textDecoration: "none" }}>
                <button className="btn btn-success text-white px-5 py-3 rounded-pill" onClick={() => handleCategoryFilter("kid")}>kids</button>
              </h2>
            </NavLink>
          </div>
        </div>
        <div className="row">
          {filteredData.map((val, ind) => (
            <div className="col-lg-3 m-0 " key={ind}>
              <img src={val.imgsrc} alt={val.title} className="image-fluid-1 image-hover-border" />
              <div className="p-4 text-center services-content ">
                <h4 className="mb-3">{val.title}</h4>
                <Link
                  to={{
                    pathname: `/shopItem/${val.id}`,
                    state: { item: val }, // Pass the item data as state
                  }}
                  className="btn btn-success text-white px-5 py-3 rounded-pill"
                >
                  {val.btn}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
