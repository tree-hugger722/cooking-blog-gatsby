import React from "react"

import { Link } from "gatsby"

import myriamAndEmma from "../../Images/myriam-and-emma.jpg"
import gardenImage from "../../Images/garden-image.jpg"
import emmaCooking from "../../Images/emma-cooking.jpg"
import noodles from "../../Images/noodles.jpg"
import myriamGardening from "../../Images/myriam-gardening.jpg"

import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-images">
        <img
          className="about-image-individual"
          src={myriamAndEmma}
          alt="Myriam and Emma after a bike ride"
        />
        <img
          className="about-image-individual"
          src={gardenImage}
          alt="Early garden plot"
        />
        <img
          className="about-image-individual"
          src={emmaCooking}
          alt="Emma cooking"
        />
        <img className="about-image-individual" src={noodles} alt="noodles" />
        <img
          className="about-image-individual"
          src={myriamGardening}
          alt="Myriam in the garden"
        />
      </div>

      <div>
        <h2>About Us</h2>
        <p>
          Hello/Bonjour/Hallo/Hola friends! Welcome to our cooking blog. We
          (Emma and Myriam) are so excited to have a single platform to share
          the food we make with all the people we love. We both find a lot of
          joy in cooking. Emma has learned a lot about love while watching
          Myriam prepare and eat meals with friends. For anyone who has shared
          one of those meals with us, you know we're not experts, and we don't
          aim for fine dining. We like simple food, creative food, fresh food,
          colorful food, and good company with which to eat it. Quarantine gave
          the two of us the chance to cook together again. Many of our friends
          and family have also chosen to spend more time cooking together, and
          have taken the time to try new recipes. What better time to start a
          cooking blog?
        </p>

        <p>
          Besides this, Emma is declaring a major in Computer Science and
          decided to make the blog from scratch as a way to practice her Web
          Development skills. Please excuse the primitive design of the website!
          She's working on it:)
        </p>

        <p>
          If you have any recipe suggestions (family favorites, an interesting
          discovery, something you tried at a friend's house, etc.) we would
          love to try them! You can submit them to us using the{" "}
          <Link to="/suggest-recipes">website form</Link>.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
