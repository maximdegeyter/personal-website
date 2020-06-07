import React from "react"
import "./about.css"

const openTag = "<"
const closeTag = ">"

const About = () => (
  <section className="section__about">
    {/* <h3>
      {{ openTag }} <span className="section__title">About me</span>{" "}
      {{ closeTag }}
    </h3> */}
    <p class="text__about">
      I'm a 24 year old <strong>Devine</strong> (Digital design & development)
      alumni from <strong>Ghent, Belgium</strong>. Currently I'm looking for 🔥
    <strong> my first job</strong> 🔥 to kickstart my career. If I'm not busy
      programming or designing, then you'll probably find me near a comic book,
      something Star Wars related, or a basketball!
    </p>
  </section>
)

export default About
