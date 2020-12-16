import React from "react";
import "./Intro.scss";
import jcInPelo from "../../assets/images/jc-pelourinho-oct2019.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div
        class="intro-background"
        style={{ backgroundImage: `url(${jcInPelo})` }}
      ></div>
      <p className="intro-slogan">
        Exploring the Diaspora one destination at a time
      </p>
    </div>
  );
};

export default Intro;
