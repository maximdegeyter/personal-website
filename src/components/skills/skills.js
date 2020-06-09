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
            <img className="skills--item" src={HTML}></img>
          </li>
          <li>
            <img className="skills--item" src={CSS}></img>
          </li>
          <li>
            <img className="skills--item" src={JS}></img>
          </li>
          <li>
            <img className="skills--item" src={ReactJS}></img>
          </li>
          <li>
            <img className="skills--item" src={Sass}></img>
          </li>
        </ul>
      </div>
      <div className="skills--wrapper">
        <h4>Back-end</h4>
        <ul className="skills--list">
          <li>
            <img className="skills--item" src={PHP}></img>
          </li>
          <li>
            <img className="skills--item" src={Node}></img>
          </li>
        </ul>
      </div>
      <div className="skills--wrapper">
        <h4>Database</h4>
        <ul className="skills--list">
          <li>
            <img className="skills--item" src={SQL}></img>
          </li>
          <li>
            <img className="skills--item" src={Mongo}></img>
          </li>
        </ul>
      </div>
      <div className="skills--wrapper">
        <h4>Native</h4>
        <ul className="skills--list">
          <li>
            <img className="skills--item" src={Swift}></img>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Skills
