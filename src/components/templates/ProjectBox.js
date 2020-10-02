import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"
import Img from "gatsby-image"

const ProjectBox = ({ project, imgSrc, type }) => {
  const { projectType, slug, title, topic, description, color } = project

  const unique = type === "unique"
  return (
    <Link to={unique ? "/contact" : `projects/${slug.current}`}>
      {/* <a target="_blank" href={slug.current}> */}
      <ProjectStyled type={type} color={color}>
        <div className="alwaysOverlay">
          <Img
            style={{ opacity: "0.2", width: "100%", height: "100%" }}
            fluid={imgSrc}
            alt=""
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>

        <div className="tags">
          <div>
            <p className="type">{projectType}</p>
            <p className="title"> {title}</p>
          </div>
          <div className="sectionText">{topic}</div>
        </div>
      </ProjectStyled>

      {/* </a> */}
    </Link>
  )
}

export default ProjectBox

const ProjectStyled = styled.div`
  transition: 0.3s all ease;
  :hover {
    transform: scale3d(1.1, 1.1, 1);
    background-position: 100% 50%;
    bottom: 2px;
  }
  cursor: pointer;
  /* padding-bottom: 83%; */
  width: 100%;
  height: 220px;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.18);
  position: relative;
  background-size: contain;
  background-position: center;
  overflow: hidden;
  border-radius: 10px;
  .alwaysOverlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-position: top;
    background-color: ${props => props.color};
    background-size: cover;
  }

  .type {
    font-size: 1.4rem;
    font-weight: 400;
  }
  .title {
    font-size: 2.5rem;
    font-weight: 700;
  }

  .content {
    p {
      font-size: 1rem;
    }
  }

  .tags {
    width: 100%;
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    transition: 0.5s ease;
    .sectionText {
      margin-bottom: 1.2rem;
    }
  }
  .content {
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    p {
      width: 90%;
    }
    button {
      color: var(--white);
      border: 2px solid var(--blue);
      border-radius: 12px;
      background: transparent;
      padding: 0.5rem 2rem;

      :hover {
        background: var(--blue);
        transition: all 0.2s ease-in;
        cursor: pointer;
      }
    }
  }

  :hover {
    .content {
      overflow: hidden;
      display: flex;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      height: 100%;
      transition: all 0.3s ease-in-out;
      width: 100%;
      background: ${props =>
        props.type === "unique" ? "var(--green)" : "var(--darkBlue)"};
      opacity: 1;
    }
  }
`
