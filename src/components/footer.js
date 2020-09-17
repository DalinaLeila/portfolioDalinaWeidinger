import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import email from "../images/email.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
const footer = () => {
  return (
    <Footer>
      <ContactBanner>
        <div>
          <h1> Interested in working together? </h1>
          <p>Let's have a chat.</p>
          <Link to="/contact">Contact me</Link>
        </div>
      </ContactBanner>
      <div className="social">
        <Link to="/contact">
          <div className="icon">
            <img width="20px" height="20px" src={email} alt="" />
          </div>
        </Link>
        <a target="_blank" href="https://linkedin.com/in/dalina-weidinger">
          <div className="icon">
            <img width="20px" height="20px" src={linkedin} alt="" />
          </div>{" "}
        </a>
        <a target="_blank" href="https://github.com/DalinaLeila">
          <div className="icon">
            <img width="20px" height="20px" src={github} alt="" />
          </div>
        </a>
        {/*   <div className="icon"></div>
        <div className="icon"></div> */}
      </div>{" "}
      <p>
        {/* © {new Date().getFullYear()} */}
        Dalina Weidinger
      </p>
    </Footer>
  )
}

export default footer
const Footer = styled.footer`
  background: var(--blue);
  height: 50vh;
  color: var(--white);
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  .social {
    display: flex;
    justify-content: space-between;
    height: 80%;
    align-items: flex-end;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid white;
      width: 40px;
      height: 40px;
      margin: 0 10px;
      :hover {
        transition: 0.2s background ease-in;

        background: var(--darkBlue);
        cursor: pointer;
      }
    }
  }
`

const ContactBanner = styled.div`
  background: var(--darkBlue);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a {
      border-radius: 25px;
      border: 2px solid var(--blue);
      font-weight: 600;
      padding: 1rem 2rem;
      text-decoration: none;
      color: var(--white);

      :hover {
        cursor: pointer;
        color: var(--white);
        background: var(--blue);
        transition: 0.2s background ease-in;
      }
    }
  }
  /* width: 50%; */

  width: -webkit-fill-available;
  border-radius: 12px;
  z-index: 10;
  margin-bottom: 10rem;
  margin: -6rem 30rem;

  @media (min-width: 1024px) and (max-width: 1440px) {
  }
  @media (max-width: 1440px) {
    margin: 0 5rem;
    margin-top: -6rem;
    div {
      display: flex;

      flex-direction: column;
    }
    h1 {
      font-size: 1.6rem;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    margin: -6rem 2rem;
    div {
      display: flex;

      flex-direction: column;
    }
    h1 {
      font-size: 1.4rem;
      margin: 0;
    }
  }
`
