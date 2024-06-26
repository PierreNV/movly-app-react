import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./logout";

const Nav = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Movly
        </NavLink>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-fill">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/movies">
                Movies
              </NavLink>
            </li>
            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/rentals">
                  Rentals
                </NavLink>
              </li>
            )}
            {user?.isGlobalAdmin && (
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/customers">
                  Customers
                </NavLink>
              </li>
            )}
            {user ? (
              <>
                <li className="nav-item ms-lg-auto">
                  <NavLink className="nav-link" aria-current="page" to="/profile">
                    {user.name}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Logout />
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ms-lg-auto">
                  <NavLink className="nav-link" aria-current="page" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/login">
                    Sign in
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
