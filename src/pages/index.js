import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import About from "../components/about"
import Hero from "../components/hero/hero"
import Socials from "../components/socials/socials"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills/skills"
import Experience from "../components/experience/experience"
import Down from "../images/arrow-down.png"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landingPage--wrapper">
      <Hero />
      <Socials />
      <img
        className="landingPage--scrollBtn"
        src={Down}
        onClick={() => scrollTo(".section__about")}
        alt="An illustration of Maxim"
        role="presentation"
      ></img>
    </div>
    <About />
    <Skills />
    <Experience />
  </Layout>
)

export default IndexPage
