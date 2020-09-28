import React from "react"
import { Container } from "../../styles/MainStyles"
import styled from "styled-components"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import cv from "../../images/Dalina_Weidinger_CV.pdf"
const About = () => {
  const { scrollY, scrollYProgress } = useViewportScroll()
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.9],
    [0, 0.9, 1, 0]
  )

  return (
    <Container flex alignCenter column bg={"var(--blue)"} id="about">
      <motion.div style={{ opacity }}>
        <AboutSection>
          <h1 className="section-title">Hello. Nice to meet you.</h1>
          <p>
            I have an interdisciplinary interest in computer science and
            psychology. The past months I worked as a web dev instructor, where
            I gained hands-on experience of debugging and optimizing code and
            teaching full stack technologies. I am now looking for a new
            exciting opportunity within the tech industry.
          </p>

          <a target="_blank" className="circle" href={cv}>
            Open Resume
          </a>
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
  min-height: 75vh;
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
