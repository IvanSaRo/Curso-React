import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
                <NavLink exact activeClassName="active" to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink exact activeClassName="active" to="/login" className="nav-item nav-link">Login</NavLink>
                <NavLink exact activeClassName="active" to="/logout" className="nav-item nav-link">Logout</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
