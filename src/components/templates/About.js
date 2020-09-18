import React from "react"
import { Container } from "../../styles/MainStyles"
import styled from "styled-components"
import { motion, useViewportScroll, useTransform } from "framer-motion"
const About = () => {
  const { scrollY, scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 0])

  return (
    <Container flex alignCenter column bg={"var(--blue)"} id="about">
      <motion.div style={{ opacity }}>
        <AboutSection>
          <h1 className="section-title">Hi, I'm Dalina. Nice to meet you.</h1>
          <p>
            Dynamic and motivated professional with an interdisciplinary
            interest in computer science and psychology. Skills include hands-on
            experience of debugging and optimizing code, analytical thinking and
            teaching full stack technologies. Experienced in applying customer
            concepts to IT to improve user experience for clients and employees.
          </p>
          <a className="circle">Download Resume</a>
        </AboutSection>
      </motion.div>
    </Container>
  )
}

export default About

const AboutSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--white);
  height: 70vh;
  max-width: 960px;
  padding-top: 100px;

  p {
    font-weight: 300;
    line-height: 2;
    font-size: 1.1rem;
  }
  .circle {
    background: var(--green);
    color: var(--white);
    border-radius: 25px;
    border: 2px solid var(--green);
    font-weight: 600;
    padding: 0.7rem 1.5rem;
    -webkit-text-decoration: none;
    text-decoration: none;

    :hover {
      cursor: pointer;
    }
  }
  @media (max-width: 1024px) {
    margin: 60px 5rem;
    min-height: 40vh;
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
    margin-bottom: 4rem;
    padding-top: 30px;
    height: auto !important;
  }
`
