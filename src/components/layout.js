import React from "react"

import Header from "./Header/Header"

import Footer from "./Footer/Footer"
import MainPhoto from "./HomeContent/MainPhoto"
import PropTypes from "react"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  return (
    <div>
      <header>
        <Header />
        {location.pathname === rootPath && <MainPhoto />}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object,
}

export default Layout
