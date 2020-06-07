import React from "react"
import { Link } from "gatsby"

import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro">👋</div>
    <h1>Hi, I'm Maxim!</h1>
    <p className="subtitle">Front-end Developer</p>
    <About />
  </Layout>
)

export default IndexPage
