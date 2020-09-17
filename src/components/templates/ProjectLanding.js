import React from "react"
import { Link } from "gatsby"
import { Container } from "../../styles/MainStyles"
import styled from "styled-components"
import Projects from "./Projects"

const ProjectLanding = () => (
  <Container bg="var(--white)" id="projects">
    <ProjectPageSection>
      <div className="header">
        <span>
          <h1 className="section-title">My Recent Work</h1>
          <p>Here are a few projects I've worked on recently.</p>
        </span>
      </div>

      <Projects />
    </ProjectPageSection>
  </Container>
)

export default ProjectLanding

const ProjectPageSection = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: var(--darkBlue);
  border-top: 1px solid var(--borderColor);
  padding-top: 2rem;
`
