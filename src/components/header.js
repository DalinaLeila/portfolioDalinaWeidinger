import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef, useEffect } from "react"
import { Navbar } from "../styles/MainStyles"
import cv from "../images/Dalina_Weidinger_CV.pdf"

const Header = ({ siteTitle }) => {
  const [navBackground, setNavBackground] = useState(false)
  const [shadow, setShadow] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 670 && window.scrollY < 1570

      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Navbar
      shadow={shadow}
      btnColor={navBackground ? "var(--green)" : "var(--blue)"}
      color={navBackground ? "var(--white)" : "var(--darkBlue)"}
      backgroundColor={navBackground ? "var(--blue)" : "var(--white)"}
      style={{ transition: "1s ease" }}
    >
      <div className="container">
        <Link className="logo desktop-logo" to="/">
          Dalina <span>Weidinger</span>
        </Link>
        <Link className="phone-logo logo" to="/">
          DW
        </Link>
        <div>
          <Link className=" about-link " to="/#about">
            About
          </Link>
          <a className=" about-link" target="_blank" href={cv}>
            Resume
          </a>

          <Link className=" about-link " to="/#projects">
            Projects
          </Link>
          <Link className="circle" to="/contact" bg="var(--beige)">
            Contact
          </Link>
        </div>
      </div>
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
