import React from "react"

import NavBar from "./NavBar"
import Title from "./Title"

import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="color-strip" id="top"></div>
      <div className="site-header">
        <Title className="site-title" />
        <NavBar />
      </div>
    </div>
  )
}

export default Header
