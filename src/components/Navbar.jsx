import React from "react";
import { Link, NavLink } from "react-router-dom";
import Language from "./Language";

const Navbar = ({ lang }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <span className="text-danger fs-1">VALORANT</span> WIKI
          </Link>
          <button
            className="navbar-toggler helloLast"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mynav"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink
                to="/agents"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Agents
              </NavLink>
              <NavLink to="/weapons" className="nav-link" href="#">
                Weapons
              </NavLink>
              <NavLink to="/maps" className="nav-link" href="#">
                Maps
              </NavLink>
              <div className="space"></div>
              <Language lang={lang} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
