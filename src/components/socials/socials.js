import React from "react"
import Twitter from "../../images/twitter.png"
import Behance from "../../images/behance.png"
import LinkedIn from "../../images/linkedin.png"
import Github from "../../images/github.png"
import "./socials.css"

const Socials = () => (
  <div className="socials--wrapper">
    <h3 className="socials--title">Follow me</h3>
    <ul>
      <li>
        <a
          className="socials--link"
          href="https://twitter.com/maximdegeyter"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Twitter} alt="Twitter logo"></img>
        </a>
      </li>
      <li>
        <a
          className="socials--link"
          href="https://www.linkedin.com/in/maximdegeyter/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn logo"></img>
        </a>
      </li>
      <li>
        <a
          className="socials--link"
          href="https://github.com/maximdegeyter"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="Github logo"></img>
        </a>
      </li>
      <li>
        <a
          className="socials--link"
          href="https://www.behance.net/maximdegeyter"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Behance} alt="Béhance logo"></img>
        </a>
      </li>
    </ul>
  </div>
)

export default Socials
