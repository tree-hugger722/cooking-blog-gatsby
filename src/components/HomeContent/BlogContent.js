import React from "react"

import BlogHeader from "./BlogHeader"
import BlogEntry from "./BlogEntry"

import "./HomeContent.css"

const BlogContent = () => {
  return (
    <div className="blog-content">
      <BlogHeader
        title="Welcome to Our Blog"
        author="Emma Neil"
        date="06/24/2020"
      />
      <BlogEntry>This is our first blog entry!</BlogEntry>
    </div>
  )
}

export default BlogContent
