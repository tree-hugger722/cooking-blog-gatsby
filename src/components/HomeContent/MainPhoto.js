import React from "react";

import homemadePizza from "../../Images/homemade-pizza.jpg";

import "./HomeContent.css";

const MainPhoto = () => {
  return (
    <div>
      <img className="main-photo" src={homemadePizza} alt="homemadePiza" />
    </div>
  );
};

export default MainPhoto;
