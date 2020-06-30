import React, { useState } from "react";

import "./RecipeForm.css";

const FormElement = ({ name }) => {
  const [value, setValue] = useState("");

  return (
    <label className="form-element">
      <p>{name}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

export default FormElement;
