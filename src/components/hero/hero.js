import React from "react"
import Welcome from "../../images/hero-img.png"
import "./hero.css"

const Socials = () => (
  <div className="hero--wrapper">
    <div className="hero--content">
      <span role="img" className="intro">
        👋
      </span>
      <h1>Hi, I'm Maxim!</h1>
      <p className="subtitle">Front-end Developer</p>
    </div>
    <div className="hero--img">
      <img src={Welcome}></img>
    </div>
  </div>
)

export default Socials
