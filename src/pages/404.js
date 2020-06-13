import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Error from "../images/404.png"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <img src={Error} alt="Illustration of a broken robot"></img>
  </Layout>
)

export default NotFoundPage
