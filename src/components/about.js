import React from "react"
import SubTitle from "./subtitle/subtitle"
import Me from "../images/maxim1.png"
import "./about.css"

const About = () => (
  <section className="section__about">
    <SubTitle title="About" />
    <div className="about--wrapper">
      <img className="img" src={Me}></img>
      <p className="text__about">
        I'm a 24 year old <strong>Devine</strong> (Digital design & development)
        alumni from <strong>Ghent, Belgium</strong>. Currently I'm looking for
        <strong> a job </strong> 👨‍💻 to kickstart my career. If I'm not busy
        programming or designing, then you'll probably find me near a comic
        book, something Star Wars related, or a basketball!
      </p>
    </div>
  </section>
)

export default About
