import React from "react"
import SubTitle from "../subtitle/subtitle"

import HTML from "../../images/icons/html.png"
import CSS from "../../images/icons/css.png"
import JS from "../../images/icons/js.png"
import ReactJS from "../../images/icons/react.png"
import Sass from "../../images/icons/sass.png"
import PHP from "../../images/icons/php.png"
import Node from "../../images/icons/node.png"
import SQL from "../../images/icons/sql.png"
import Mongo from "../../images/icons/mongo.png"
import Swift from "../../images/icons/swift.png"
import "./skills.css"

const Skills = () => (
  <section className="section__skills">
    <SubTitle title="Skills & Tools" />
    <h3>Programming</h3>
    <div className="skills--wrapper-all">
      <div className="skills--wrapper">
        <h4>Front-end</h4>
        <ul className="skills--list">
          <li>
            <img className="skills--item" src={HTML} alt="HTML5 logo"></img>
            <p className="skills--item-text">HTML</p>
          </li>
          <li>
            <img className="skills--item" src={CSS} alt="CSS3 logo"></img>
            <p className="skills--item-text">CSS</p>
          </li>
          <li>
            <img className="skills--item" src={JS} alt="JavaScript logo"></img>
            <p className="skills--item-text">JavaScript</p>
          </li>
          <li>
            <img className="skills--item" src={ReactJS} alt="React logo"></img>
            <p className="skills--item-text">React</p>
          </li>
          <li>
            <img className="skills--item" src={Sass} alt="Sass logo"></img>
            <p className="skills--item-text">Sass</p>
          </li>
        </ul>
      </div>
      <div className="skills--wrapper">
        <h4>Back-end</h4>
        <ul className="skills--list">
          <li>
            <img className="skills--item" src={PHP} alt="PHP logo"></img>
            <p className="skills--item-text">PHP</p>
          </li>
          <li>
            <img className="skills--item" src={Node} alt="NodeJS logo"></img>
            <p className="skills--item-text">NodeJS</p>
          </li>
        </ul>
      </div>
      <div className="skills--wrapper">
        <h4>Database</h4>
        <ul className="skills--list">
          <li>
            <img className="skills--item" src={SQL} alt="MySQL logo"></img>
            <p className="skills--item-text">MySQL</p>
          </li>
          <li>
            <img className="skills--item" src={Mongo} alt="MongoDB logo"></img>
            <p className="skills--item-text">MongoDB</p>
          </li>
        </ul>
      </div>
      <div className="skills--wrapper">
        <h4>Native</h4>
        <ul className="skills--list">
          <li>
            <img className="skills--item" src={Swift} alt="Swift logo"></img>
            <p className="skills--item-text">Swift</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Skills
