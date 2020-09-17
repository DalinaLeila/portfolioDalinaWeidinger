import React, { useState } from "react"
import styled from "styled-components"

const Testimonials = () => {
  const [ref, setRef] = useState(0)
  return (
    <Container>
      <div>
        <h1 className="section-title">Testimonials</h1>
        <p>People I've worked with have said some nice things...</p>
        <div className="flex">
          {/* <button onClick={() => setRef(ref - 1)}>hi</button> */}
          <References>
            {references.map((el, i) => {
              if (ref === i) {
                return (
                  <div>
                    <h4>"{el.text}"</h4>
                    <h3>{el.name}</h3>
                    <p>{el.role}</p>
                  </div>
                )
              }
            })}
          </References>
          {/* <button onClick={() => setRef(ref + 1)}>hi</button> */}
        </div>
        <Dots>
          {references.map((el, i) => {
            return (
              <div
                className={ref === i ? "active" : ""}
                onClick={() => setRef(i)}
              ></div>
            )
          })}
        </Dots>
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
  background: var(--whiteText);
  @media (min-width: 1024px) {
    padding: 2rem 15rem 10rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem 10rem;
  }
  padding: 2rem 5rem 10rem;
`

const References = styled.div`
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px var(--borderColor);

  p {
    color: var(--blue);
  }
`
const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  div {
    margin: 0 5px;
    width: 10px;
    height: 10px;
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, amet temporibus quasi totam molestiae doloribus veniam sit dolorem fugiat asperiores, dolores sunt ut? Nam nisi, dignissimos facilis corrupti ab reiciendis.",
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
