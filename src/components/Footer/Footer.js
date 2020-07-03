import React from "react"

import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <p className="footer-text">
        © {new Date().getFullYear()} Emma Neil, Built with{" "}
        <a href="https://www.gatsbyjs.org"> Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
