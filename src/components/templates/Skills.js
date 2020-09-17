import React, { useState } from "react"
import styled from "styled-components"
import code from "../../images/code.svg"
import student from "../../images/student.svg"
import pointer from "../../images/pointer.png"
import Image from "gatsby-image"

const Skills = () => {
  const [direction, setDirection] = useState(true)
  return (
    <div>
      <SkillsStyles>
        <div className="box" onMouseOver={() => setDirection(true)}>
          <img
            className="icon"
            src={student}
            alt="https://www.flaticon.com/authors/srip"
          />
          <h1>UCL Graduate</h1>
          <p>
            I completed a Bachelor of Science in Psychology focusing mainly on
            the interaction between technology and psychology
          </p>

          <p className="sub-title">Modules Included:</p>
          <ul>
            <li>Human Computer Interaction</li>
            <li>Computing & Statistics</li>
            <li>Machine Learning for Behavioral Analytics</li>
            <li>Research Methods</li>
            <li>Organizational Psychology</li>
            <li>Marketing</li>
          </ul>
        </div>
        {/*  <div className="box middle">
          <img className={direction ? "reverse" : ""} src={pointer} alt="" />
        </div> */}
        <div className="box" onMouseOver={() => setDirection(false)}>
          <img
            className="icon"
            src={code}
            alt="https://www.flaticon.com/authors/icongeek26"
          />
          <h1>Full-stack Developer</h1>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>

          <p className="sub-title">Languages I know:</p>
          <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React/Redux/JSX</li>
            <li>GatsbyJs</li>
            <li>NextJs</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node</li>
            <li>git/GitHub</li>
          </ul>
        </div>
        {/*      <div>
        <img className="icon" src={code} alt="" />
        <h1>Web-dev Instructor</h1>
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <p className="sub-title">Languages I know:</p>
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React/Redux/JSX</li>
          <li>GatsbyJs</li>
          <li>NextJs</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>Node</li>
          <li>git/GitHub</li>
        </ul>{" "}
      </div> */}
      </SkillsStyles>
    </div>
  )
}

export default Skills

const SkillsStyles = styled.div`
  display: flex;
  justify-content: space-around;
  /* position: relative; */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: var(--darkBlue);
  margin-top: -19rem;
  height: 70vh;
  margin-bottom: 120px;
  /* background: var(--blue); */

  @media (min-width: 1024px) and (max-width: 1440px) {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 1024px) {
    margin-top: -8rem;
    margin-bottom: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    .box {
      margin-bottom: 30px;
      width: 80% !important;
      /* display: flex; */
    }
    .middle {
      img {
        display: none;
      }
    }
  }

  @media (max-width: 678px) {
    margin-top: -6rem;
  }
  .box {
    padding: 30px 10px 20px;
    border-radius: 12px;
    box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5),
      0 0 0 1px var(--borderColor);
    background-color: white;
    text-align: center;
    width: 45%;
    height: 100%;
    font-weight: 300;

    .icon {
      width: 60px;
      margin: 20px 0;
    }

    h1 {
      margin-bottom: 30px;
    }

    .sub-title {
      margin-top: 50px;
      color: var(--blue);
      font-weight: 400;
    }
  }

  ul {
    padding: 0;
    li {
      color: var(--darkBlue);
      list-style-type: none;
      padding: 7px 0;
      font-weight: 300;
    }
  }

  /* .middle {
    background: transparent;
    border: none;
    box-shadow: none;
    display: flex;
    align-items: center;
    margin-top: -5rem;

    img {
      transition: all 0.2s ease-in-out;
      width: 100%;
    }
    .reverse {
      transition: all 0.2s ease-in-out;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
  } */
`
