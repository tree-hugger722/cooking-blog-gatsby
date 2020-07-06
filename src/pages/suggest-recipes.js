import React from "react"

import Layout from "../components/layout"

import "./styles.css"

const SuggestRecipesPage = ({ location }) => {
  return (
    <Layout className="site-text" location={location}>
      <div className="site-text">
        <h2>Suggest Recipes</h2>
        <p>
          We welcome any and all recipe suggestions! Just fill out the following
          form and we'll take a look.
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdu6DgDnrNi8T9WKtTaOk6h_SyHiWjLg9DQdmaGj1sdXyuIFg/viewform?embedded=true"
          width="640"
          height="911"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </Layout>
  )
}

export default SuggestRecipesPage
