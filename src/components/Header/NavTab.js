import React from "react"

import { Link } from "gatsby"

import "./Header.css"

const NavTab = ({ name, to }) => {
  return (
    <Link className="nav-tab-text" to={to}>
      {name}
    </Link>
  )
}

export default NavTab
