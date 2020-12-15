import React from "react";
import "./NavBar.scss";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaTwitter, FaVimeoV } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-logo-container">
        <p>Black Diasporer</p>
      </div>
      <div className="nav-pages-div">
        <Link className="nav-link" to="/about">
          <p>About</p>
        </Link>
        <Link className="nav-link" to="/blog">
          <p className="nav-link">Blog</p>
        </Link>
        <Link className="nav-link" to="/destinations">
          <p className="nav-link">Destinations</p>
        </Link>
        <Link className="nav-link" to="/travel">
          <p className="nav-link">Travel</p>
        </Link>
        <Link className="nav-link" to="/contact">
          <p className="nav-link">Contact</p>
        </Link>
      </div>
      <div className="nav-social-div">
        <a
          className="nav-link"
          href="https://www.instagram.com/patucon/?hl=en"
          target="_blank"
        >
          <GrInstagram />
        </a>
        <a
          className="nav-link"
          href="https://www.facebook.com/patucon.palante/"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          className="nav-link"
          href="https://twitter.com/patucon"
          target="_blank"
        >
          <FaTwitter />
        </a>
        <a
          className="nav-link"
          href="https://vimeo.com/user11072765"
          target="_blank"
        >
          <FaVimeoV />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
