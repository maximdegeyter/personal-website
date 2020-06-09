import React from "react"
import SubTitle from "../subtitle/subtitle"
import Devine from "../../images/devine.png"
import Osoc from "../../images/osoc.png"
import Hyperdrive from "../../images/hyperdrive.png"

import "./experience.css"

const Experience = () => (
  <section className="section__experience">
    <SubTitle title="Education & Experience" />
    <ul className="timeline">
      <li class="event" data-date="Devine">
        <div className="experience--item-title-wrapper">
          <div>
            <h3>Devine - KASK Conservatorium HoGent Howest</h3>
            <small>2016-2020</small>
            <p>Bachelor’s degree Digital Design & Development.</p>
          </div>
          <img className="experience--img" src={Devine} alt="Devine logo"></img>
        </div>
      </li>
      <li class="event" data-date="OSOC">
        <div className="experience--item-title-wrapper">
          <div>
            <h3>Open Summer Of Code</h3>
            <small>Summer 2019</small>
            <p>
              Studentjob React developer/graphic designer for team
              Gentlestudent.
            </p>
          </div>
          <img className="experience--img" src={Osoc} alt="Osoc logo"></img>
        </div>
      </li>
      <li class="event" data-date="Studio Hyperdrive">
        <div className="experience--item-title-wrapper">
          <div>
            <h3>Studio Hyperdrive</h3>
            <small>Spring 2020</small>
            <p>Internship as a web developer.</p>
          </div>
          <img
            className="experience--img"
            src={Hyperdrive}
            alt="Studio Hyperdrive logo"
          ></img>
        </div>
      </li>
    </ul>
  </section>
)

export default Experience
