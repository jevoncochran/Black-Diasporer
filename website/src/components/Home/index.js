import React from "react";
import "./Home.scss";
import Intro from "../Intro";
import RecentPosts from "../RecentPosts";

const Home = () => {
  return (
    <div>
      <Intro />
      <RecentPosts />
    </div>
  );
};

export default Home;
