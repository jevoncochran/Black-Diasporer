import React from "react";
import "./Intro.scss";
import jcInPelo from "../../assets/images/jc-pelourinho-oct2019.jpg";

const Intro = () => {
  return (
    <div
      className="intro"
      style={{ backgroundImage: `url(${jcInPelo})` }}
    ></div>
  );
};

export default Intro;
