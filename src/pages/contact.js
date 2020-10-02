import React, { useState } from "react"
import { Link, graphql, navigate } from "gatsby"
import styled from "styled-components"
import { ContentWrapper } from "../styles/Wrapper"
import { motion } from "framer-motion"
import back from "../images/back.svg"
import { Container, Navbar } from "../styles/MainStyles"
import Message from "../components/templates/Message"
import Layout from "../components/layout"
import SEO from "../components/seo"
import email from "../images/email.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
const Contact = ({ data }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [success, setsuccess] = useState(false)
  const [message, setMessage] = useState(false)
  const [emptyField, setEmptyField] = useState("")

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.email.trim() || !form.name.trim() || !form.message.trim()) {
      setEmptyField("missing")
      setsuccess(false)
      setMessage(true)
      return
    }

    const theForm = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": theForm.getAttribute("name"),
        ...form,
      }),
    })
      .then(() => {
        setsuccess(true)
        // setMessage(true)
        setMessage(true)

        setTimeout(() => {
          setMessage(false)
        }, 5000)

        setEmptyField("")
        setForm({ name: "", email: "", message: "" })
      })
      .catch(error => alert(error))
  }

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div>
      <SEO title="Contact" />

      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Navbar border backgroundColor="var(--darkBlue)" color="var(--white)">
          <div className="container">
            <Link className="logo desktop-logo" to="/">
              Dalina <span>Weidinger</span>
            </Link>
            <h1 className="back">
              <Link className="tooltip" to={`/`}>
                {"← "}
                <span className="tooltiptext">Back home</span>
              </Link>
            </h1>
          </div>
        </Navbar>
        <Landing>
          <ContentWrapper
            style={{
              marginTop: "100px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {message ? (
              success ? (
                <Message
                  message={message}
                  setMessage={setMessage}
                  successMessage
                />
              ) : (
                <Message message={message} setMessage={setMessage} />
              )
            ) : (
              ""
            )}
          </ContentWrapper>

          <ContentWrapper className="flex align-center">
            <div className="main-container">
              <div
                className="box"
                data-sal="fade"
                data-sal-duration="600"
                data-sal-delay="100"
                data-sal-easing="ease"
              >
                {/* <p className="sections title">Contact</p> */}
                <h1 className="headline">
                  Thanks for taking the time to reach out.
                  <br /> <span className="logo">Let's work together!</span>
                  <div className="social">
                    <a
                      target="_blank"
                      href="https://linkedin.com/in/dalina-weidinger"
                    >
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
                </h1>
                <div className="contact-info-container">
                  <div className=" body contact-info">
                    {/* <img src={phoneIco} alt="" /> */}
                    {/* <p>{main.phone}</p> */}
                  </div>
                  <div className=" body contact-info">
                    {/* <img src={printIco} alt="" /> */}
                    {/* <p>{main.fax}</p> */}
                  </div>
                  <div className=" body contact-info">
                    {/* <img src={emailIco} alt="" /> */}
                    {/* <p>{main.email}</p> */}
                  </div>
                  <div className=" body contact-info">
                    {/* <img src={houseIco} alt="" /> */}
                    {/* <p>{main.address}</p> */}
                  </div>
                </div>
              </div>
            </div>
            <Box
              className="box"
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-delay="500"
              data-sal-easing="ease"
              className="box"
            >
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="form"
                action="/"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="input-container">
                    <label className="input-header">Name*</label>
                    <input
                      // placeholder="John Doe"
                      className={`form-input body ${emptyField} `}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="input-container">
                    <label className="input-header">Email*</label>
                    <input
                      // placeholder="johndoe@email.com"
                      className={`form-input body ${emptyField} `}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <label className="input-header">Message*</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder=""
                    className={`form-input body ${emptyField} `}
                    emptyField={emptyField}
                    type="text"
                    rows="10"
                  />
                </div>
                <div className="flex-col button-container">
                  <button type="submit" white type="submit">
                    Send Message
                  </button>
                  <p className="captions">*required fields</p>
                </div>
              </form>
            </Box>
          </ContentWrapper>
        </Landing>
        <div style={{ height: "35vh", background: "var(--white)" }}></div>
      </motion.div>
    </div>
  )
}

export default Contact

const Landing = styled.div`
  background: var(--darkBlue);
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.18);

  .social {
    display: flex;
    justify-content: flex-start;
    height: 80%;
    margin-top: 10px;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      width: 40px;
      height: 40px;
      margin: 0 10px;
      background: var(--green);
      border: 0.5px solid var(--white);
      transition: 0.2s background ease-in;
      :hover {
        transition: 0.2s background ease-in;
        background: var(--darkBlue);
        border-color: var(--white);

        cursor: pointer;
      }
    }
  }

  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 600px) {
    /* S */
    .main-container {
      flex-direction: column;
      justify-content: center;
      margin: 0 !important;

      .box {
        padding: 0 !important;
      }
    }

    .box:first-child {
      margin-top: 56px;
      margin-bottom: 80px;
    }

    .form {
      div {
        display: flex;
        flex-direction: column !important;
      }
    }
    .contact-info-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px !important;
      img {
        padding-right: 8px !important;
      }
    }

    .button-container {
      flex-direction: column;
      align-items: flex-start !important;
      button {
        margin-bottom: 8px;
      }
      p {
        margin-bottom: 40px;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    /* M */

    .headline {
      margin-bottom: 40px !important;
    }
    .contact-info-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 8px !important;
      img {
        padding-right: 8px !important;
      }
    }
    .main-container {
      flex-direction: column;
      justify-content: center;
      /* margin: 0 !important; */

      .box {
        padding: 0 !important;
      }
    }

    .box:first-child {
      margin-bottom: 104px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    /* L */
    .main-container {
      /* margin: 0 !important; */

      .box {
        padding: 0 !important;
      }
    }
  }
  min-height: 70vh;
  /* background: transparent; */
  color: var(--darkBlue);
  align-items: center;
  display: flex;

  .main-container {
    justify-content: space-between;

    .title {
      margin-bottom: 4px;
    }
    .headline {
      margin-bottom: 56px;
      font-size: 3rem;
      text-align: left;
      font-weight: 300;
      color: var(--white);

      span {
        font-size: 2rem;
        font-weight: 900;
        color: var(--white);
      }
    }

    .box:first-child {
      padding: 0 70px 0 0;
      width: 100%;
    }

    .box:nth-child(2) {
      padding: 0 0 0 70px;
    }
    .box {
      width: 100%;
    }

    display: flex;
    margin: 0 80px;
  }
  .contact-info {
    align-items: center;
    display: flex;
    margin-bottom: 4px;
    img {
      height: 100%;
      padding-right: 16px;
    }
  }

  .form {
    .input-container {
      width: 100%;
      margin-bottom: 24px;

      .input-header {
        margin-bottom: 4px;
        font-size: 1rem;
      }

      .form-input {
        height: 30px;
        /* padding-bottom: 2px; */
        background: transparent;
        border: none;
        border-bottom: 1px solid var(--darkBlue);
        padding: 10px;

        color: var(--darkBlue);
        width: 100%;
        transition: 2s border ease-in;

        ::placeholder {
          opacity: 0.6;
          color: var(--darkBlue);
        }
        :focus {
          outline: none;
          border: 1px solid var(--darkBlue);
          transition: 2s border ease-in;
        }
      }

      textarea {
        height: auto !important;
        /* border: 1px solid var(--white) !important; */
      }

      .missing {
        border-bottom: 1px solid var(--green) !important;
      }
    }
  }

  .button-container {
    display: flex;
    align-items: flex-end;

    button {
      /* border-radius: 25px; */
      border: 2px solid var(--darkBlue);
      font-weight: 600;
      /* padding: 0.7rem 1.5rem; */
      border: 1px solid var(--darkBlue);
      background: transparent;
      color: var(--darkBlue);
      font-size: 1.1rem;
      transition: 0.2s background ease-in;

      :focus {
        outline: none;
      }
      :hover {
        background: var(--darkBlue);
        border-color: var(--darkBlue);
        cursor: pointer;
        color: var(--white);
        transition: 0.2s background ease-in;
      }
    }

    p {
      opacity: 0.6;
    }
  }
`

const Box = styled.div`
  width: 45vw;
  margin: 0 80px;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.18);

  /* border: 1px solid var(--darkBlue); */
  background: var(--white);
  padding: 25px;
  border-radius: 15px;
  margin-bottom: -15rem;
  .contact-info {
    align-items: center;
    display: flex;
    margin-bottom: 4px;
    img {
      height: 100%;
      padding-right: 16px;
    }
  }

  .form {
    .input-container {
      width: 100%;
      margin-bottom: 24px;

      .input-header {
        margin-bottom: 4px;
        font-size: 1rem;
      }

      .form-input {
        height: 30px;

        /* padding-bottom: 2px; */
        background: transparent;
        border: none;
        border-bottom: 1px solid var(--darkBlue);
        padding: 10px 0;
        color: var(--darkBlue);
        transition: 2s all ease-in;

        width: 100%;
        ::placeholder {
          opacity: 0.6;
          color: var(--darkBlue);
        }
        :focus {
          outline: none;
          transition: 2s all ease-in;
          border: 1px solid var(--darkBlue);
        }
      }

      textarea {
        height: auto !important;
        /* border: 1px solid var(--white) !important; */
      }

      .missing {
        border-bottom: 1px solid var(--green) !important;
      }
    }
  }

  .button-container {
    display: flex;
    align-items: flex-end;

    button {
      border-radius: 25px;
      border: 2px solid var(--darkBlue);
      font-weight: 600;
      padding: 0.7rem 1.5rem;

      color: var(--white);
      background: var(--darkBlue);
      font-size: 1.1rem;
      transition: 0.2s background ease-in;

      :focus {
        outline: none;
      }
      :hover {
        cursor: pointer;

        transition: 0.2s background ease-in;
      }
    }

    p {
      opacity: 0.6;
    }
  }
`
