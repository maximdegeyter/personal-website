import React, { useState, useEffect } from "react"
import Welcome from "../../images/hero-img.png"
import "./hero.css"

const Hero = () => {
  const myTitles = ["Front-end Developer", "UI/UX Designer", "Motion Designer"]
  const [randomItem, setRandomItem] = useState(myTitles[0])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < 2) {
        index++
      } else {
        index = 0
      }

      setRandomItem(myTitles[index])
    }, 4000)
    return () => clearInterval(interval)
  }, [myTitles])

  return (
    <div className="hero--wrapper">
      <div className="hero--content">
        <span role="img" className="intro" aria-label="emoji">
          👋
        </span>
        <h1>Hi, I'm Maxim!</h1>
        <div className="subtitle">
          <p>{randomItem}</p>
        </div>
      </div>
      <div className="hero--img">
        <img src={Welcome} alt="Illustration of an astronaut"></img>
      </div>
    </div>
  )
}

export default Hero
