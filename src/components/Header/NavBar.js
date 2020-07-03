import React from "react"

import NavTab from "./NavTab"

import "./Header.css"

const NavBar = () => {
  return (
    <div>
      <nav id="nav-bar">
        <NavTab to="/" name="Home" />
        <NavTab
          className="nav-tab"
          to="/suggest-recipes"
          name="Suggest Recipes"
        />
        <NavTab className="nav-tab" to="/about-us" name="About Us" />
      </nav>
    </div>
  )
}

export default NavBar
