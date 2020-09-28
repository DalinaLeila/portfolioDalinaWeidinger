import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ParticlesLanding from "../components/ParticlesLanding"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ParticlesLanding />

    <NotFound className="flex-col align-center justify-center ">
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </NotFound>
  </Layout>
)

export default NotFoundPage
const NotFound = styled.div`
  height: 100vh;
  background: var(--white);
  position: absolute;
  left: 50%;
  right: 50%;
  top: 0;

  div {
    width: 300px;
    text-align: center;
  }
`
