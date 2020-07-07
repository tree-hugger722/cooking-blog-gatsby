import React from "react"

import Header from "./Header/Header"

import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
import Footer from "./Footer/Footer"
import MainPhoto from "./MainPhoto/MainPhoto"
import PropTypes from "prop-types"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  let header

  return (
    <div>
      <div>
        <nav style={{ background: "green" }}>
          {" "}
          Login Status:
          <button className="btn" onClick={() => setDialog(true)}>
            {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
          </button>
        </nav>
        <main>{children}</main>
        <IdentityModal
          showDialog={dialog}
          onCloseDialog={() => setDialog(false)}
        />
      </div>
      <div>
        <header>
          <Header />
          {location.pathname === rootPath && <MainPhoto />}
        </header>
        <main className="body">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object,
}

export default Layout
