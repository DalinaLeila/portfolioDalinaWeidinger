import React from "react"
import { Link } from "gatsby"
import Container from "../../styles/generalStyles"
import styled from "styled-components"

const About = () => (
  <Container flex alignCenter column bg={"var(--blue)"} id="about">
    <AboutSection>
      <h1 className="section-title">Hi, I'm Dalina. Nice to meet you.</h1>
      <p>
        Dynamic and motivated professional with an interdisciplinary interest in
        computer science and psychology. Skills include hands-on experience of
        debugging and optimizing code, analytical thinking and teaching full
        stack technologies. Experienced in applying customer concepts to IT to
        improve user experience for clients and employees.
      </p>
      <a className="circle">Download Resume</a>
    </AboutSection>
  </Container>
)

export default About

const AboutSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--white);
  height: 60vh;
  max-width: 960px;
  margin-top: 60px;

  p {
    font-weight: 300;
    line-height: 2;
    font-size: 1.2rem;
  }
  .circle {
    background: var(--darkBlue);
    color: var(--white);
    border-radius: 25px;
    border: 2px solid var(--darkBlue);
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
