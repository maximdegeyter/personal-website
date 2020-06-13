import React, { useState, useEffect } from "react"
import Welcome from "../../images/hero-img.png"
import "./hero.css"

const Hero = () => {
  const myTitles = ["Front-end Developer", "UI/UX Designer", "Motion Designer"]
  let index = 0
  const [randomItem, setRandomItem] = useState(myTitles[index])

  /* eslint-disable */
  useEffect(() => {
    const interval = setInterval(() => {
      loop()
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const loop = () => {
    if (index < 2) {
      index++
    } else {
      index = 0
    }

    setRandomItem(myTitles[index])
  }
  /* eslint-enable */

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
