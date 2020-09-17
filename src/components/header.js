import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef, useEffect } from "react"
import { Navbar } from "../styles/MainStyles"

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
