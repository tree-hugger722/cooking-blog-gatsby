import React from "react";

import "./HomeContent.css";

const BlogEntry = ({ text }) => {
  return (
    <div className="blog-entry">
      <p className="blog-text">{text}</p>
    </div>
  );
};

export default BlogEntry;
