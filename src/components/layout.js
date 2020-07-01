import React from "react"

import Header from "./Header/Header"

import { rhythm, scale } from "../utils/typography"
import MainPhoto from "./HomeContent/MainPhoto"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if ({ location }.pathname === rootPath) {
    header = (
      <div>
        <Header />
        <MainPhoto />
      </div>
    )
  } else {
    header = (
      <div>
        <Header />
      </div>
    )
  }
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Emma Neil, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
