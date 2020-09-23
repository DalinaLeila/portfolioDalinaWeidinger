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
  z-index: 20;
  align-items: center;
  min-height: 4.25rem;
  background-color: ${props => props.backgroundColor};
  width: 100%;
  border-bottom: ${props => (props.border ? "var(--borderColor)" : "")};
  .container {
    z-index: 20;
    margin: 0 5rem;

    width: 100%;

    .desktop-logo {
      /*  color: var(--darkBlue);
      span {
        color: var(--green) !important;
      } */
    }
    .phone-logo {
      display: none;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1024px) {
      margin: 0 10rem;
    }
    @media (max-width: 768px) {
      margin: 0 2rem;

      .phone-logo {
        display: flex;
      }
      .desktop-logo {
        display: none;
      }

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
      color: ${props => props.btnColor};
      border-radius: 25px;
      border: 2px solid ${props => props.btnColor};
      font-weight: 600;
      padding: 0.7rem 1.5rem;
      text-decoration: none;
    }
  }
`

export const Landing = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--darkBlue);
  flex-direction: column;
  background: var(--white);

  /*   position: absolute;
  left: 50%;
  right: 50%;
  top: 0; */

  @media (max-width: 768px) {
    margin: 0 2rem;
  }
  .title-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 0;
  }
  .title-landing {
    position: absolute;
    top: 0;
    margin: 0;
    z-index: 0;
    font-size: 12rem;
    color: var(--green);
    opacity: 0.5;
    @media (max-width: 1024px) {
      font-size: 7rem;
    }
    @media (max-width: 425px) {
      font-size: 5rem;
    }
    @media (max-width: 375px) {
      font-size: 4rem;
    }
  }

  .title-landing-two {
    z-index: 1;
    opacity: 0.9;
    margin-bottom: 0;
    margin-top: 4rem;
    font-size: 12rem;

    @media (max-width: 1024px) {
      font-size: 7rem;

      margin-top: 2rem;
    }

    @media (max-width: 425px) {
      font-size: 5rem;
    }

    @media (max-width: 375px) {
      font-size: 4rem;
    }
  }

  .center {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .down {
    position: relative;
    width: 30px;
    height: 60px;
    border-radius: 25px;
    background: transparent;
    border: 3px solid var(--blue);
    overflow: hidden;
  }
  .down:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--blue);
    left: 50%;
    top: 10px;
    transform: translate(-50%, 0);
    animation: animate 1s infinite linear;
  }
  .down:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 15px;
    border-radius: 50%;
    background: var(--blue);
    left: 50%;
    top: 5px;
    transform: translate(-50%, 0);
    border-radius: 3px;
  }
  @keyframes animate {
    0% {
      transform: translate(-50%, 20px);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, 60px);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 100px);
      opacity: 0;
    }
  }
`
