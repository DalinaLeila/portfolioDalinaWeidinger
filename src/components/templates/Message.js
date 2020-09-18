import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Message = ({ successMessage, message, setMessage }) => {
  const language = "en"

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Banner successMessage={successMessage}>
        <div>
          <div className="content">
            <h5>
              {successMessage
                ? langMessage.messageSuccess[language]
                : langMessage.messageError[language]}
            </h5>
            <p className="captions">
              {" "}
              {successMessage
                ? langMessage.detailSuccess[language]
                : langMessage.detailError[language]}
            </p>
          </div>
        </div>
        <button onClick={() => setMessage(!message)} className="close">
          X
        </button>
      </Banner>
    </motion.div>
  )
}

export default Message

const langMessage = {
  messageSuccess: {
    de: "Ihre Nachricht wurde verschickt!",
    en: "Your message was sent!",
  },
  detailSuccess: {
    de:
      "Danke, dass Sie uns kontaktiert haben. Wir werden uns so schnell wie möglich bei Ihnen melden.",
    en: " Thank you for contacting me. I'll get back to you as soon as I can.",
  },
  messageError: {
    de: "Sieht so aus, als wäre etwas schief gelaufen!",
    en: "Looks like something went wrong!",
  },
  detailError: {
    de:
      " Bitte füllen Sie alle Pflichtfelder aus, bevor Sie Ihre Nachricht einreichen.",
    en: " Please fill all the mandatory fields before submitting your message.",
  },
}

const Banner = styled.div`
  transition: 1s all ease-in;
  justify-content: center;
  padding: 5px 10px;
  @media (max-width: 1024px) {
    padding: 12px 16px;
  }
  background: var(--green);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    height: 48px;
    /* width: 50%; */
  }

  div {
    display: flex;
    align-items: center;

    @media (max-width: 1023px) {
      .content {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  h5 {
    color: ${props =>
      props.successMessage ? "var(--darkBlue)" : "var(--alert)"};
    margin-right: 16px;
  }

  p {
    color: var(--white);
  }

  img {
    margin-left: 16px;
    margin-right: 24px;
  }

  .close {
    color: var(--grey);
    margin-right: 16px;
  }

  button {
    :focus {
      outline: none;
    }
    background: none;
    border: none;
    hover: {
      cursor: pointer;
    }
  }
`
