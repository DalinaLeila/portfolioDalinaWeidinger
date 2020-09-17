import styled from "styled-components"

export const Container = styled.div`
  /* // min-height: 70vh; */
  padding: 50px 0;
  padding-top: 0;
  background: ${props => props.bg};
  height: ${props => props.height};
  display: ${props => (props.flex ? "flex" : "")};
  justify-content: ${props => (props.spaceBtw ? "space-between" : "center")};
  flex-direction: ${props => (props.column ? "column" : "")};
  align-items: ${props => (props.alignCenter ? "center" : "")};

  @media (max-width: 678px) {
    min-height: 90vh;
  }
`

export const Navbar = styled.header`
  display: flex;
  position: fixed;
  z-index: 10;
  align-items: center;
  min-height: 4.25rem;
  background-color: ${props => props.backgroundColor};
  width: 100%;
  border-bottom: ${props =>
    props.border ? "    0.5px solid rgba(255, 255, 255, 0.5)" : ""};
  .container {
    margin: 0 5rem;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1024px) {
      margin: 0 10rem;
    }
    @media (max-width: 768px) {
      margin: 0 2rem;

      .about-link {
        display: none;
      }
    }

    a {
      padding: 0.6rem;
      text-decoration: none;
      color: ${props => props.color};
    }

    .circle {
      color: var(--blue);
      border-radius: 25px;
      border: 2px solid var(--blue);
      font-weight: 600;
      padding: 0.7rem 1.5rem;
      text-decoration: none;
    }
  }
`

export const Landing = styled.div`
  height: 82vh;
  display: flex;
  justify-content: center;
  color: var(--darkBlue);
  flex-direction: column;
  background: var(--white);

  .title-landing {
    margin: 0;
    font-size: 5rem;

    @media (max-width: 1024px) {
      font-size: 3rem;
    }
  }
`
