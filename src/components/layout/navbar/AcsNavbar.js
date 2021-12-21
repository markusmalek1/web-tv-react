import React from "react";
import { NavLink } from "react-router-dom";

export default function AcsNavbar() {
  return (
    <header className="acs-navbar">
      <div className="acs-navbar-left">
        <NavLink to="/">
          <div className="acs-logo">
            <img
              src="https://backstage.connect.artculture.studio/uploads/ACS_Logo_bande_blanc_5f54a5feff.png"
              alt="acs_logo"
            />
          </div>
        </NavLink>
        <span className="acs-text" style={{ marginLeft: 32 }}>
          Discover
        </span>
      </div>
      <div className="acs-navbar-right">
        <NavLink to="/live">
          <span className="acs-text">Live</span>
        </NavLink>
      </div>
    </header>
  );
}
