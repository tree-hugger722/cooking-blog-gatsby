import React from "react"

import "./HomeContent.css"

const BlogEntry = ({ children }) => {
  return (
    <div className="blog-entry">
      <p className="blog-text">{children}</p>
    </div>
  )
}

export default BlogEntry
