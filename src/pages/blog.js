import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>
      You can find my blog at{" "}
      <a href="https://medium.com/maxims-passion-project" target="_blank">
        Medium
      </a>
      !
    </p>
  </Layout>
)

export default SecondPage
