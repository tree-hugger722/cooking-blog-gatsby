import React from "react"

import Layout from "../components/layout"
import RecipeForm from "../components/RecipeForm"

import "../components/RecipeForm/RecipeForm.css"

const SuggestRecipesPage = () => {
  return (
    <Layout className="site-text ">
      <h2>Suggest Recipes</h2>
      <p>
        We welcome any and all recipe suggestions! Just fill out the following
        form and we'll take a look.
      </p>
      <RecipeForm />
    </Layout>
  )
}

export default SuggestRecipesPage
