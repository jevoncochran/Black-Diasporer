import React from "react";
import "./RecentPosts.scss";
import latestPosts from "./latestPosts";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const RecentPosts = () => {
  return (
    <div className="rp">
      <div className="rp-headline-div">
        <h1 className="rp-headline">Recent Posts</h1>
        <hr className="rp-headline-hr" />
      </div>

      <div className="rp-posts-div">
        {latestPosts.map((post) => {
          return (
            <div className="rp-individual-post-div" key={post.title}>
              <img className="rp-post-img" src={post.image} alt={post.alt} />
              <p className="rp-post-title">{post.title}</p>
            </div>
          );
        })}
      </div>

      <div className="rp-blog-btn-div">
        <button className="rp-blog-btn">
          <div className="rp-blog-btn-content">
            View More
            <div className="rp-blog-btn-arrow">
              <HiOutlineArrowNarrowRight />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RecentPosts;
