import React from "react"

import Layout from "../components/layout"
import SubTitle from "../components/subtitle/subtitle"
import BlogImg from "../images/blog.png"
import SEO from "../components/seo"

import "./blog.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Blog" />
    <SubTitle title="Blog" />
    <div class="blog--wrapper">
      <p className="blog--intro">
        You can find my blog at{" "}
        <a
          href="https://medium.com/maxims-passion-project"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>
        !
      </p>
      <img className="blog--img" src={BlogImg} alt="illustration of someone using a laptop"></img>
    </div>
  </Layout>
)

export default SecondPage
