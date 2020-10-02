import React, { useState } from "react"
import styled from "styled-components"
import code from "../../images/code.svg"
import student from "../../images/student.svg"
import certificate from "../../images/certificate.svg"
import { motion, useViewportScroll, useTransform } from "framer-motion"
const Skills = () => {
  const { scrollY, scrollYProgress } = useViewportScroll()
  // useTransform(motionValue, from, to);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.6, 1])
  return (
    <div>
      <SkillsStyles>
        <motion.div style={{ scale }} className="box">
          <img
            className="icon"
            src={student}
            alt="https://www.flaticon.com/authors/srip"
          />
          <h1>UCL Graduate</h1>
          <p className="description">
            I graduated with first class honours from UCL studying BSc
            Psychology.
          </p>

          <p className="sub-title">Relevant modules I took:</p>
          <ul>
            <li>Human Computer Interaction</li>
            <li>Computing & Statistics</li>
            <li>Machine Learning for Behavioral Analytics</li>
            <li>Research Methods</li>
            <li>Organizational Psychology</li>
            <li>Marketing</li>
          </ul>
        </motion.div>

        <motion.div style={{ scale }} className="box">
          <img
            className="icon"
            src={certificate}
            alt="https://www.flaticon.com/authors/icongeek26"
          />
          <h1>Coding School</h1>
          <p className="description">
            I completed the full-stack web development bootcamp @ Ironhack.
          </p>

          <p className=" sub-title">Skills I learned:</p>
          <ul className="">
            <li>Team work</li>
            <li>Clean code principles</li>
            <li>Object oriented design</li>
            <li>Test-driven development (TDD)</li>
            <li>Time management</li>
            <li>Daily standups</li>
            <li>git/GitHub</li>
            <li>VS Code</li>
          </ul>
        </motion.div>

        <motion.div style={{ scale }} className="box">
          <img
            className="icon"
            src={code}
            alt="https://www.flaticon.com/authors/icongeek26"
          />
          <h1>Full-stack Developer</h1>
          <p className="description">
            I am now working as a Freelance developer utilizing but not limited
            to the MERN stack.
          </p>

          <p className="sub-title">Languages I know:</p>
          <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React/Redux/JSX</li>
            <li>Gatsby</li>
            <li>Next</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node</li>
          </ul>
        </motion.div>
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
  margin-top: -24rem;

  margin-bottom: 120px;
  /* background: var(--green); */

  .description {
    padding: 0 10px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    ul {
      display: grid;
      /* grid-template-columns: 1fr 1fr; */
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
    box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.18);

    /* box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 
      0 0 0 1px var(--borderColor);*/
    background-color: var(--white);
    text-align: center;
    width: 100%;
    margin: 1rem;
    /* height: 30vh; */
    font-weight: 300;
    /* transition: 1s height ease-in; */
    /* height: 80vh; */

    /*   :hover {
    } */
    .icon {
      width: 60px;
      margin: 10px 0;
    }

    h1 {
      margin-bottom: 30px;
    }

    .sub-title {
      margin-top: 50px;
      color: var(--blue);
      text-decoration: underline;
      font-weight: 800;
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
