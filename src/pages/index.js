import React from "react"
import Skills from "../components/templates/Skills.js"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ProjectLanding from "../components/templates/ProjectLanding"
import About from "../components/templates/About"
import { motion } from "framer-motion"
import Footer from "../components/footer"
import Testimonials from "../components/templates/Testimonials"
import { Landing } from "../styles/MainStyles"
import ParticlesLanding from "../components/ParticlesLanding"
/* export const query = graphql`
  query {
    file(relativePath: { eq: "student.svg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
` */

const IndexPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Layout>
        <SEO title="Home" />
        {/* <ParticlesLanding /> */}
        <Landing>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            transition={{ duration: 2, ease: "easeIn" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                height: "100%",
              }}
            >
              <div className="title-container">
                <motion.h1 className="title-landing">Weidinger</motion.h1>
                <motion.h1 className="title-landing-two">Dalina</motion.h1>
              </div>
              <motion.p
                style={{
                  margin: "0",
                  fontSize: "1.3rem",
                }}
              >
                I am a freelance web developer, and I love what I do.
              </motion.p>
            </div>
            {/* <img width="150px" src={me} alt="" /> */}
            {/* <img width="200px" src={me} alt="" /> */}
          </motion.div>
          <Link to="/#about">
            <div class="center">
              <div class="down"></div>
            </div>
          </Link>
        </Landing>

        <About />
        <Skills />

        <ProjectLanding />
        <Testimonials />
        <Footer />
      </Layout>
    </motion.div>
  )
}

export default IndexPage
