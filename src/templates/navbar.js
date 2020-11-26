import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { isMobile } from "react-device-detect";
import SignedInNav from "./SignedInNav";
import SignedOutNav from "./SignedOutNav";
import signedInNav from "./SignedInNav";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth, profile } = props;
  const navlinks = auth.uid ? <SignedInNav /> : <SignedOutNav />;
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <a className="navbar-brand" href="#">
          <strong>App</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {navlinks}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
