import React from "react"

import AboutUs from "../components/AboutUs/AboutUs"
import Layout from "../components/layout"

const AboutUsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <AboutUs />
    </Layout>
  )
}

export default AboutUsPage
