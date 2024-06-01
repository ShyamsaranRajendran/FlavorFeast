// src/components/header/header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineFilter } from "react-icons/md";
function Header() {
  return (
    <header>
      <div className="title-header">FoodZone</div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Products"
              className="nav-link"
              activeClassName="active"
            >
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Pricing"
              className="nav-link"
              activeClassName="active"
            >
              Meat & Seafood
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className="nav-link" activeClassName="active">
              Health & Diet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <div className="login">
          {" "}
          <NavLink to="/login" className="nav-link" activeClassName="active">
            Login
          </NavLink>
        </div>
        <div className="register">
          <NavLink to="/register" className="nav-link" activeClassName="active">
            Register
          </NavLink>
        </div>
        <FaSearch />
        <MdOutlineFilter />
      </div>
    </header>
  );
}

export default Header;
