import React from "react"
import styled from "styled-components"
import Layout from "../layout"
import Img from "gatsby-image"
import { Link, graphql, navigate } from "gatsby"
import { Container, Navbar } from "../../styles/MainStyles"
import ReactMarkdown from "react-markdown"

import { ContentWrapper } from "../../styles/Wrapper"
import SEO from "../seo"
import { motion } from "framer-motion"
import back from "../../images/back.svg"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      id
      title
      technologies {
        name
      }

      nextProject
      previousProject
      webLink {
        current
      }
      indepProject
      projectNumber
      color
      client
      description
      projectType

      image {
        asset {
          fluid {
            src
          }
        }
      }
      imageBanner {
        asset {
          fluid {
            src
          }
        }
      }
      slug {
        current
      }

      learnings

      spec
      challanges
      carousel {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`
const ProjectTemplate = ({ data }) => {
  const project = data.sanityProject
  console.log(project)
  return (
    <>
      <SEO title="Project" />
      <Navbar border backgroundColor="var(--green)" color="var(--white)">
        <div className="container">
          <Link className="logo desktop-logo" to="/">
            Dalina <span>Weidinger</span>
          </Link>
          <Link to="/">
            <img height="30px" src={back} alt="" />
          </Link>
        </div>
      </Navbar>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ContentWrapper>
          <Swipe>
            <h1>
              <Link to={`/projects/${project.previousProject}`}>{"<  "}</Link>
              <Link to={`/projects/${project.nextProject}`}>{"  >"}</Link>
            </h1>
          </Swipe>
          <ProjectBanner>
            <Grid>
              <div className="project-hero">
                <div className="title">PROJECT</div>
                <h1 className="project-title">{project.title}</h1>
                <p className="description">{project.description}</p>
                <a
                  className="web-link"
                  href={project.webLink.current}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </div>
              <div className="project-image">
                <Img
                  style={{
                    boxShadow: "0px 0px 35px 0px rgba(0, 0, 0, 0.18)",

                    borderRadius: "24px",
                    width: "100%",
                    height: "100%",
                  }}
                  fluid={project.imageBanner?.asset.fluid}
                  alt=""
                  objectFit="cover"
                  objectPosition="right"
                />
              </div>
            </Grid>
          </ProjectBanner>
          <InfoContainer>
            <div>
              <div className="client-container">
                <div className="title">Client</div>
                <h3 className="">{project.client}</h3>
              </div>
              <div className="type-container">
                <div className="title">Project Type</div>
                <h3 className="">{project.projectType}</h3>
              </div>
              <div className="stack-container">
                <div className="title">Toolkit</div>
                {project.technologies.map(el => {
                  return <p className="shadow stack">{el.name}</p>
                })}
              </div>
            </div>
            <div>
              <div>
                <h1 className="title">What where the specs of this project?</h1>
                <ReactMarkdown source={project.spec} />
              </div>
              <div>
                <h1 className="title">Any challanges you faced?</h1>
                <ReactMarkdown source={project.challanges} />
              </div>
              <div>
                <h1 className="title">What are your take aways?</h1>
                <ReactMarkdown source={project.learnings} />
              </div>
            </div>
          </InfoContainer>
        </ContentWrapper>
      </motion.div>
    </>
  )
}
export default ProjectTemplate

const Swipe = styled.div`
  padding-top: 4.25rem;
  a {
    color: var(--darkBlue);
    text-decoration: none;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  height: 100%;
  /* align-content: center; */
  .project-hero {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .project-title {
      margin-top: 0px;
      margin-bottom: 20px;
      color: var(--darkBlue);
      font-size: 64px;
      line-height: 1;
      font-weight: 700;
      letter-spacing: -0.04em;
    }

    .description {
      margin-bottom: 10px;
      color: var(--darkBlue);
      font-size: 18px;
      line-height: 1.6;
      font-weight: 400;
      letter-spacing: -0.01em;
    }
  }

  .project-image {
    padding: 20px;

    height: 100%;
  }

  .title {
    margin-top: 0px;
    margin-bottom: 20px;
    color: #b4b2c5;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`

const ProjectBanner = styled.div`
  background: transparent;
  height: 80vh;
  color: var(--darkBlue);

  .web-link {
    text-decoration: none;
    background: var(--darkBlue);
    color: white;
    border-radius: 25px;
    border: 2px solid var(--darkBlue);
    font-weight: 600;
    padding: 0.7rem 1.5rem;
    width: fit-content;
  }

  img {
    object-position: right !important;
  }
`

const InfoContainer = styled.div`
  color: var(--darkBlue);
  padding-top: 100px;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  .stack {
    background: var(--borderColor);
    padding: 15px;
    width: fit-content;
  }

  .shadow {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.18);
  }
  .title {
    margin-top: 0px;
    margin-bottom: 20px;
    color: #b4b2c5;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`
