import React from "react"

import Link from "gatsby"

import "./Header.css"

const Title = () => {
  return (
    <h1 id="site-title">
      <Link id="title" to="/">
        Taste of CLE
      </Link>
    </h1>
  )
}

export default Title
