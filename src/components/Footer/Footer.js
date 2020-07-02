import React from "react"

import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()} Emma Neil, Built with {` `}
      <a href="https://www.gatsbyjs.org"> Gatsby</a>
    </footer>
  )
}

export default Footer
