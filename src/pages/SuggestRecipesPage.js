import React from "react";

import RecipeForm from "../Components/RecipeForm";

import "../Components/RecipeForm/RecipeForm.css";

const SuggestRecipesPage = () => {
  return (
    <div className="site-text">
      <h2>Suggest Recipes</h2>
      <p>
        We welcome any and all recipe suggestions! Just fill out the following
        form and we'll take a look.
      </p>
      <RecipeForm />
    </div>
  );
};

export default SuggestRecipesPage;
