import React from "react"
import Skills from "../components/templates/Skills.js"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ProjectLanding from "../components/templates/ProjectLanding"
import About from "../components/templates/About"
import {
  motion,
  useMotionValue,
  useViewportScroll,
  useTransform,
} from "framer-motion"

import Footer from "../components/footer"
import Testimonials from "../components/templates/Testimonials"
import { Landing } from "../styles/MainStyles"
// import ParticlesLanding from "../components/ParticlesLanding"
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
  const { scrollY, scrollYProgress } = useViewportScroll()
  // useTransform(motionValue, from, to);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.2], [0, -250])

  const opacityAnimP = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.7, 0])
  const sizeAnimP = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    ["1.7rem", "1.9rem", "2.1rem"]
  )
  const yPosAnimLastName = useTransform(scrollYProgress, [0, 0.1], [0, -250])

  const scale = useTransform(scrollYProgress, [1, 0], [0.6, 1])
  const x = useMotionValue(500)
  const y = useMotionValue(500)

  const rotateX = useTransform(y, [0, 1000], [10, -10])
  const rotateY = useTransform(x, [0, 2000], [-10, 10])
  function handleMouse(event) {
    x.set(event.pageX)
    y.set(event.pageY)
  }
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseMove={handleMouse}
    >
      <Layout>
        <SEO title="Home" />
        {/* <ParticlesLanding /> */}
        <Landing>
          <motion.div>
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
                <motion.h1
                  rotateX={rotateX}
                  rotateY={rotateY}
                  style={{ perspective: 1000, scale, y: yPosAnimLastName }}
                  initial={{ opacity: 0, y: 200 }}
                  animate={{
                    opacity: 1,

                    y: 0,
                    transition: { duration: 0.6 },
                  }}
                  transition={{ duration: 2, ease: "easeIn" }}
                  className="title-landing"
                >
                  Weidinger
                </motion.h1>
                <motion.h1
                  style={{
                    perspective: 1000,
                    scale,
                    y: yPosAnim,
                    opacity: opacityAnimP,
                  }}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  transition={{ duration: 3, ease: "easeIn" }}
                  className="title-landing-two"
                >
                  Dalina
                </motion.h1>
              </div>
              <motion.p
                className="logo"
                rotateX={rotateX}
                rotateY={rotateY}
                style={{
                  margin: "0",
                  fontSize: sizeAnimP,

                  opacity: opacityAnimP,
                }}
                initial={{ opacity: 0, y: 200 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                }}
                exit={{ opacity: 0 }}
              >
                I am a B.S.c Psychology graduate, web developer, and I love what
                I do.
              </motion.p>
            </div>
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
