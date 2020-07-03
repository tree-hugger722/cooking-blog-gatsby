import React from "react"

import tomatoes from "../../Images/green-beans.jpg"

import "./HomeContent.css"

const MainPhoto = () => {
  return (
    <div>
      <img className="main-photo" src={tomatoes} alt="garden tomatoes" />
    </div>
  )
}

export default MainPhoto
