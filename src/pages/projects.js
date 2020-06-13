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
      <section className="section--projects">
        <SubTitle title="Projects" />
        <p className="projects--intro">What I've been working on</p>
        <ul className="projects--list">
          {projects.map(project => (
            <li className="project--wrapper">
              <article className="project">
                <div className="img-hover-zoom">
                  <img
                    src={project.node.frontmatter.image}
                    alt={project.node.frontmatter.title}
                  ></img>
                </div>
                <div className="project--content-wrapper">
                  <a
                    className="project--link"
                    href={project.node.frontmatter.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>{project.node.frontmatter.title}</h3>
                    <img
                      className="project--link-img"
                      src={LinkImg}
                      alt="external link icon"
                    ></img>
                  </a>
                  <p className="project--desc">
                    {project.node.frontmatter.description}
                  </p>
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
      </section>
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
            description
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
