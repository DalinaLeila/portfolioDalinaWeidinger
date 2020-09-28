import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const Testimonials = () => {
  /*   const [ref, setRef] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      let randomRef = Math.floor(Math.random() * references.length)
      setRef(randomRef)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const nextRef = before => {
    if (before && ref > 0) setRef(ref - 1)
    else if (before && ref === 0) setRef(references.length - 1)
    else if (ref === references.length - 1) setRef(0)
    else if (ref < references.length - 1) setRef(ref + 1)
  }
 */
  return (
    <Container>
      <div>
        <h1 className="section-title">Testimonials</h1>
        <p>People I've worked with have said some nice things...</p>
        <div className="flex align-center">
          {/*  <button className="btn-next" onClick={() => nextRef("before")}>
            {"<"}
          </button> */}
          <References>
            {references.map((el, i) => {
              // if (ref === index)
              return (
                <div id={`slide-${i}`}>
                  <h4 className="text">"{el.text}"</h4>
                  <h3 className="name">{el.name}</h3>
                  <p>{el.role}</p>
                </div>
              )
            })}
          </References>
          {/*     <button className="btn-next" onClick={() => nextRef()}>
            {">"}
          </button> */}
        </div>
        {/* <Dots>
          {references.map((el, i) => {
            return (
              <div
                // to={`/#slide-${i}`}
                className={ref === i ? "active" : ""}
                onClick={() => setRef(i)}
              ></div>
            )
          })}
        </Dots> */}
      </div>
    </Container>
  )
}

export default Testimonials

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 10rem;
  padding-top: 2rem;
  color: var(--darkBlue);
  border-top: 1px solid var(--borderColor);
  background: var(--white);

  @media (min-width: 1024px) {
    padding: 2rem 15rem 10rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem 10rem;
  }
  padding: 2rem 5rem 10rem;

  div {
    width: 100%;
  }
  .btn-next {
    height: 102px;
    width: 102px;
    background: none;
    border: none;
    color: var(--darkBlue);
    font-size: 1.4rem;

    :hover {
      cursor: pointer;
    }
    :focus {
      outline: none;
    }
  }
`

const References = styled.div`
  display: flex;

  scroll-snap-type: x mandatory;

  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--green);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--borderColor);
  }
  width: 100%;

  display: flex;
  overflow-x: auto;

  div {
    scroll-snap-align: start;

    margin-right: 20px;
    width: 100%;
    flex-shrink: 0;
    height: 100%;
  }
  border-radius: 12px;
  padding: 1rem;
  /* box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px var(--borderColor);
  */
  p {
    color: var(--blue);
  }
  .text {
    font-size: 25px;
    font-weight: 300;
  }

  .text {
    position: relative;
    background: var(--blue);
    border-radius: 0.4em;
    color: var(--white);
    padding: 30px;
  }

  .text:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 19px solid transparent;
    border-top-color: var(--blue);
    border-bottom: 0;
    border-right: 0;
    margin-left: -9.5px;
    margin-bottom: -19px;
  }
  .name {
    font-size: 1.25rem;
  }
`
const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  div {
    margin: 0 5px;
    width: 15px;
    height: 15px;
    border-radius: 12px;
    border: 1px solid var(--darkBlue);

    :hover {
      cursor: pointer;
    }
  }
  .active {
    background: var(--darkBlue);
  }
`

const references = [
  {
    text:
      "We developed a great partnership with Dalina and her dedication to our website is evident in all aspects of the site. We appreciate her attention to detail and creative approach to bringing our new exhibit to life online.",
    name: "Ethan Dabush",
    role: "Co-Founder Savorly",
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, amet temporibus quasi totam molestiae doloribus veniam sit dolorem fugiat asperiores, dolores sunt ut? Nam nisi, dignissimos facilis corrupti ab reiciendis.",
    name: "André de Alberquerqe",
    role: "Co-Worker @Ironhack",
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, amet temporibus quasi totam molestiae doloribus veniam sit dolorem fugiat asperiores, dolores sunt ut? Nam nisi, dignissimos facilis corrupti ab reiciendis.",
    name: "Anouck Gotlib",
    role: "Co-Founder BelgianBoys",
  },
]
