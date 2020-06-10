import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SubTitle from "../components/subtitle/subtitle"
import SEO from "../components/seo"
import LinkImg from "../images/visit.png"
import SiteImg from "../images/personalWebsite.png"

import "./projects.css"

const SecondPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Projects" />
      <SubTitle title="Projects" />
      <p>What I've been working on</p>
      <ul>
        {projects.map(project => (
          <li>
            <article className="project">
              <a
                className="project--link"
                href={project.node.frontmatter.url}
                target="_blank"
              >
                <h3>{project.node.frontmatter.title}</h3>
                <img className="project--link-img" src={LinkImg}></img>
              </a>
              <div className="img-hover-zoom">
                <img src={SiteImg}></img>
              </div>
              <ul className="project--tagList">
                {project.node.frontmatter.tags.map(tag => (
                  <li className="project--tag">{tag}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default SecondPage

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            image
            tags
            title
            url
          }
        }
      }
    }
  }
`
