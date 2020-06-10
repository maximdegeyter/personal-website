import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SubTitle from "../components/subtitle/subtitle"
import SEO from "../components/seo"
import LinkImg from "../images/visit.png"

import "./projects.css"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Projects" />
      <SubTitle title="Projects" />
      <p className="projects--intro">What I've been working on</p>
      <ul>
        {projects.map(project => (
          <li>
            <article className="project">
              <div className="img-hover-zoom">
                <img src={project.node.frontmatter.image}></img>
              </div>
              <div className="project--content-wrapper">
                <a
                  className="project--link"
                  href={project.node.frontmatter.url}
                  target="_blank"
                >
                  <h3>{project.node.frontmatter.title}</h3>
                  <img className="project--link-img" src={LinkImg}></img>
                </a>
                <ul className="project--tagList">
                  {project.node.frontmatter.tags.map(tag => (
                    <li className="project--tag">{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Projects

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
