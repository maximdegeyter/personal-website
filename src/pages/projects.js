import React from "react"

import Layout from "../components/layout"
import SubTitle from "../components/subtitle/subtitle"
import SEO from "../components/seo"
import LinkImg from "../images/visit.png"
import SiteImg from "../images/personalWebsite.png"

import "./projects.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <SubTitle title="Projects" />
    <p>What I've been working on</p>
    <ul>
      <li>
        <article className="project">
          <a
            className="project--link"
            href="https://maximdegeyter.netlify.app/"
          >
            <h3>My personal website</h3>
            <img className="project--link-img" src={LinkImg}></img>
          </a>
          <div className="img-hover-zoom">
            <img src={SiteImg}></img>
          </div>
          <ul className="project--tagList">
            <li className="project--tag">Gatsby</li>
            <li className="project--tag">Netlify CMS</li>
          </ul>
        </article>
      </li>
    </ul>
  </Layout>
)

export default SecondPage
