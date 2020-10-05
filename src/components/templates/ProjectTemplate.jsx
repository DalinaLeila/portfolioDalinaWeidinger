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
      <motion.div
        exit={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* <ContentWrapper> */}

        <ProjectBanner>
          <Grid>
            <div className="project-image">
              <Img
                style={{
                  boxShadow: "0px 0px 35px 0px rgba(0, 0, 0, 0.18)",
                  width: "100%",
                  height: "100%",
                }}
                fluid={project.imageBanner?.asset.fluid}
                alt=""
                objectFit="cover"
                objectPosition="right"
              />
              {/* {project.carousel?.map(el => {
                return (
                  <Img
                    className="carousel"
                    style={{
                      // borderRadius: "24px",
                      width: "100%",
                      height: "100%",
                    }}
                    fluid={el.asset.fluid}
                    alt=""
                    objectFit="contain"
                  />
                )
              })} */}
            </div>
            <div className="project-hero">
              <Swipe>
                <h1 className="back">
                  <Link className="tooltip" to={`/`}>
                    {"← "}
                    <span className="tooltiptext">Back home</span>
                  </Link>
                </h1>
                <h1>
                  <Link to={`/projects/${project.previousProject}`}>
                    {"<  "}
                  </Link>
                  <Link to={`/projects/${project.nextProject}`}>{"  >"}</Link>
                </h1>
              </Swipe>
              <div className="title">PROJECT #{project.projectNumber}</div>
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

              <div className="header-grid">
                <div className="client-container">
                  <div className="title">Client</div>
                  <h3 className="">{project.client}</h3>
                </div>
                <div className="type-container">
                  <div className="title">Project Type</div>
                  <h3 className="">{project.projectType}</h3>
                </div>
              </div>
              <div className="title">Toolkit</div>
              <div className="stack-container">
                {project.technologies.map(el => {
                  return <p className="shadow stack"># {el.name}</p>
                })}
              </div>
            </div>
          </Grid>
        </ProjectBanner>
        {/*        <InfoContainer>
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
        </InfoContainer> */}
        {/* </ContentWrapper> */}
      </motion.div>
    </>
  )
}
export default ProjectTemplate

const Swipe = styled.div`
  display: flex;
  justify-content: space-between;
  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }
  .tooltiptext {
    font-size: 0.8rem;
  }
  .tooltip .tooltiptext {
    visibility: hidden;

    background-color: var(--darkBlue);
    color: var(--green);
    text-align: center;

    padding: 5px;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
  .back {
    border-radius: 50%;
    background: var(--blue);
    padding: 0 4px;
    transition: 0.3s all ease;
    :hover {
      transform: scale3d(1.1, 1.1, 1);
      background-position: 100% 50%;
      bottom: 2px;
    }
  }
  a {
    color: var(--white);
    text-decoration: none;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  grid-gap: 1rem;
  height: 100%;
  /* align-content: center; */
  .project-hero {
    padding: 15px 25px;
    float: right;
    z-index: 1000;
    overflow-y: auto;
    max-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .project-title {
      margin-top: 0px;
      margin-bottom: 20px;
      color: var(--white);
      font-size: 64px;
      line-height: 1;
      font-weight: 700;
      letter-spacing: -0.04em;
    }

    .description {
      margin-bottom: 10px;
      color: var(--white);
      font-size: 18px;
      line-height: 1.6;
      font-weight: 400;
      letter-spacing: -0.01em;
    }
  }

  .project-image {
    /* padding: 20px; */

    overflow-y: scroll;
    height: 100%;

    .carousel {
      display: grid;
      grid-template-columns: 1fr 1fr;
      img {
        width: 100%;
        object-fit: contain !important;
      }
    }
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
  background: var(--darkBlue);
  height: 100vh;
  color: var(--white);

  .web-link {
    text-decoration: none;
    background: var(--blue);
    color: var(--white);
    border-radius: 25px;
    border: 2px solid var(--blue);
    font-weight: 600;
    padding: 0.7rem 1.5rem;
    width: fit-content;
    transition: 0.3s all ease;
    :hover {
      transform: scale3d(1.1, 1.1, 1);
      background-position: 100% 50%;
      bottom: 2px;
    }
  }

  .header-grid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  .stack-container {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .stack {
    /*    background: var(--green);
    padding: 15px;
    width: fit-content; */
    width: fit-content;
  }

  .shadow {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.18);
  }
  .title {
    margin-top: 0px;
    margin-bottom: 10px;
    color: #b4b2c5;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
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
