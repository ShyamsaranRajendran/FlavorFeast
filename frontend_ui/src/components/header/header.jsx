// src/components/header/header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" activeClassName="active">
              Feedback
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
