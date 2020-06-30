import React from "react";

import "./HomeContent.css";

const BlogHeader = ({ title, date, author }) => {
  return (
    <div>
      <h2 className="blog-post-title">{title}</h2>
      <div className="date-author">
        <p id="date">{date}</p>
        <p id="author">{author}</p>
      </div>
    </div>
  );
};

export default BlogHeader;
