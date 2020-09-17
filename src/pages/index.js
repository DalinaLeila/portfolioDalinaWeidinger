import React from "react"
import Skills from "../components/templates/Skills.js"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ProjectLanding from "../components/templates/ProjectLanding"
import About from "../components/templates/About"
import { motion } from "framer-motion"
import Footer from "../components/footer"
import Testimonials from "../components/templates/Testimonials"
import { Landing } from "../styles/MainStyles"
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
              <motion.h1 className="title-landing">
                Full Stack Developer
              </motion.h1>
              <motion.p
                style={{
                  margin: "0",
                  fontSize: "1.3rem",
                }}
              >
                I code your ideas, and I love what I do.
              </motion.p>
            </div>
            {/* <img width="150px" src={me} alt="" /> */}
            {/* <img width="200px" src={me} alt="" /> */}
          </motion.div>
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
