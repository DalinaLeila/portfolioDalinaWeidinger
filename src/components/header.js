import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Example } from "../components/NavBar/Example"
import { Navbar } from "../styles/generalStyles"

const Header = ({ siteTitle }) => {
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 670
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])
  /* const colors = [
    "#FF008C",
    "#D309E1",
    "#9C1AFF",
    "#7700FF",
    "#4400FF",
    "#FF008C",
    "#D309E1",
    "#9C1AFF",
    "#7700FF",
    "#4400FF",
    "#FF008C",
    "#D309E1",
    "#9C1AFF",
    "#7700FF",
    "#4400FF",
  ] */
  return (
    <Navbar
      color={navBackground ? "var(--white)" : "var(--darkBlue)"}
      backgroundColor={navBackground ? "var(--darkBlue)" : "var(--white)"}
      style={{ transition: "1s ease" }}
    >
      <div className="container">
        <Link to="/#home">{siteTitle}</Link>
        <div>
          <Link className=" about-link " to="/#about">
            About Me
          </Link>
          <Link className="circle" to="/contact" bg="var(--beige)">
            Get In Touch
          </Link>
        </div>
      </div>
      {/* <Example /> */}
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Dalina Weidinger`,
}

export default Header
