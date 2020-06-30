import React from "react";

import FormElement from "./FormElement";

import "./RecipeForm.css";

const SuggestRecipesForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormElement name="Name:" />
      <FormElement name="Email:" />
      <FormElement name="Recipe:" />
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
};

export default SuggestRecipesForm;
