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
            <p>HTML</p>
          </li>
          <li>
            <img className="skills--item" src={CSS}></img>
            <p>CSS</p>
          </li>
          <li>
            <img className="skills--item" src={JS}></img>
            <p>JavaScript</p>
          </li>
          <li>
            <img className="skills--item" src={ReactJS}></img>
            <p>React</p>
          </li>
          <li>
            <img className="skills--item" src={Sass}></img>
            <p>Scss</p>
          </li>
        </ul>
      </div>
      <div className="skills--wrapper">
        <h4>Back-end</h4>
        <ul className="skills--list">
          <li>
            <img className="skills--item" src={PHP}></img>
            <p>PHP</p>
          </li>
          <li>
            <img className="skills--item" src={Node}></img>
            <p>NodeJS</p>
          </li>
        </ul>
      </div>
      <div className="skills--wrapper">
        <h4>Database</h4>
        <ul className="skills--list">
          <li>
            <img className="skills--item" src={SQL}></img>
            <p>MySQL</p>
          </li>
          <li>
            <img className="skills--item" src={Mongo}></img>
            <p>MongoDB</p>
          </li>
        </ul>
      </div>
      <div className="skills--wrapper">
        <h4>Native</h4>
        <ul className="skills--list">
          <li>
            <img className="skills--item" src={Swift}></img>
            <p>Swift</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Skills
