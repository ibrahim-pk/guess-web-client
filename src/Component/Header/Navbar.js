import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbarBg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <img src="/image/logo.jpeg" className="img-fluid" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link LinkColor" aria-current="page">
                  হোম
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-link LinkColor">
                  খেলাধুলা
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/winner-prize" className="nav-link LinkColor">
                  বিজয়ী
                </Link>
              </li>
              <li className="nav-item">
                <Link to="own-idea" className="nav-link LinkColor">
                  রেজিস্ট্রেশন
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link to="/news" className="nav-link LinkColor">
                  তথ্য
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/private" className="nav-link LinkColor">
                  প্রাইভেট
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
