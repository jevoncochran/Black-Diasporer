import React from "react";
import "./NavBar.scss";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaTwitter, FaVimeoV, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-logo-container">
        <p>Black Diasporer</p>
      </div>
      <div className="nav-pages-div">
        <Link className="nav-link nav-page" to="/about">
          <p>About</p>
        </Link>
        <Link className="nav-link nav-page" to="/blog">
          <p>Blog</p>
        </Link>
        <Link className="nav-link nav-page" to="/destinations">
          <p>Destinations</p>
        </Link>
        <Link className="nav-link nav-page" to="/travel">
          <p>Travel</p>
        </Link>
        <Link className="nav-link nav-page" to="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <div className="nav-social-div">
        <a
          className="nav-link nav-social"
          href="https://www.instagram.com/patucon/?hl=en"
          target="_blank"
        >
          <GrInstagram />
        </a>
        <a
          className="nav-link nav-social"
          href="https://www.facebook.com/patucon.palante/"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          className="nav-link nav-social"
          href="https://twitter.com/patucon"
          target="_blank"
        >
          <FaTwitter />
        </a>
        <a
          className="nav-link nav-social"
          href="https://vimeo.com/user11072765"
          target="_blank"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
