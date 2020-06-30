import React from "react"

import NavTab from "./NavTab"

import "./Header.css"

const NavBar = () => {
  return (
    <div>
      <nav id="nav-bar">
        <NavTab className="nav-tab" To="/" Name="Home" />
        <NavTab
          className="nav-tab"
          To="/suggest-recipes"
          Name="Suggest Recipes"
        />
        <NavTab className="nav-tab" To="/about-us" Name="About Us" />
      </nav>
    </div>
  )
}

export default NavBar
