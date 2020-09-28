import React from "react"
import styled from "styled-components"

const ParticlesLanding = () => {
  return (
    <Particles>
      <div id="container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
    </Particles>
  )
}
export default ParticlesLanding

const Particles = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  @keyframes particle-animation-1 {
    100% {
      transform: translate3d(21vw, 39vh, 94px);
    }
  }
  .particle:nth-child(1) {
    animation: particle-animation-1 60s infinite;
    height: 6px;
    width: 6px;
    opacity: 0.34;
    animation-delay: -0.4s;
    background-color: var(--green);
    transform: translate3d(81vw, 36vh, 18px);
  }
  @keyframes particle-animation-2 {
    100% {
      transform: translate3d(52vw, 21vh, 79px);
    }
  }
  .particle:nth-child(2) {
    animation: particle-animation-2 60s infinite;
    height: 7px;
    width: 7px;
    opacity: 0.22;
    animation-delay: -0.8s;
    background-color: var(--blue);
    transform: translate3d(9vw, 79vh, 4px);
  }
  @keyframes particle-animation-3 {
    100% {
      transform: translate3d(52vw, 30vh, 2px);
    }
  }
  .particle:nth-child(3) {
    animation: particle-animation-3 60s infinite;
    height: 8px;
    width: 8px;
    opacity: 0.46;
    animation-delay: -1.2s;
    background-color: var(--darkBlue);
    transform: translate3d(39vw, 65vh, 28px);
  }
  @keyframes particle-animation-4 {
    100% {
      transform: translate3d(84vw, 15vh, 49px);
    }
  }
  .particle:nth-child(4) {
    animation: particle-animation-4 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.43;
    animation-delay: -1.6s;
    background-color: var(--green);
    transform: translate3d(71vw, 73vh, 49px);
  }
  @keyframes particle-animation-5 {
    100% {
      transform: translate3d(72vw, 18vh, 1px);
    }
  }
  .particle:nth-child(5) {
    animation: particle-animation-5 60s infinite;
    height: 7px;
    width: 7px;
    opacity: 0.4;
    animation-delay: -2s;
    background-color: var(--darkBlue)
    transform: translate3d(14vw, 6vh, 45px);
  }
  @keyframes particle-animation-6 {
    100% {
      transform: translate3d(10vw, 38vh, 52px);
    }
  }
  .particle:nth-child(6) {
    animation: particle-animation-6 60s infinite;
    height: 8px;
    width: 8px;
    opacity: 0.49;
    animation-delay: -2.4s;
    background-color: var(--darkBlue)
    transform: translate3d(25vw, 55vh, 16px);
  }
  @keyframes particle-animation-7 {
    100% {
      transform: translate3d(73vw, 42vh, 27px);
    }
  }
  .particle:nth-child(7) {
    animation: particle-animation-7 60s infinite;
    height: 6px;
    width: 6px;
    opacity: 0.11;
    animation-delay: -2.8s;
    background-color: var(--darkBlue)
    transform: translate3d(81vw, 20vh, 36px);
  }
  @keyframes particle-animation-8 {
    100% {
      transform: translate3d(50vw, 8vh, 79px);
    }
  }
  .particle:nth-child(8) {
    animation: particle-animation-8 60s infinite;
    height: 7px;
    width: 7px;
    opacity: 0.74;
    animation-delay: -3.2s;
    background-color: var(--darkBlue)
    transform: translate3d(30vw, 18vh, 30px);
  }
  @keyframes particle-animation-9 {
    100% {
      transform: translate3d(44vw, 15vh, 62px);
    }
  }
  .particle:nth-child(9) {
    animation: particle-animation-9 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.16;
    animation-delay: -3.6s;
    background-color: var(--darkBlue)
    transform: translate3d(32vw, 67vh, 43px);
  }
  @keyframes particle-animation-10 {
    100% {
      transform: translate3d(19vw, 58vh, 67px);
    }
  }
  .particle:nth-child(10) {
    animation: particle-animation-10 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.03;
    animation-delay: -4s;
    background-color: var(--green);
    transform: translate3d(78vw, 34vh, 75px);
  }
  @keyframes particle-animation-11 {
    100% {
      transform: translate3d(34vw, 3vh, 76px);
    }
  }
  .particle:nth-child(11) {
    animation: particle-animation-11 60s infinite;
    height: 7px;
    width: 7px;
    opacity: 0.23;
    animation-delay: -4.4s;
    background-color: var(--green);
    transform: translate3d(43vw, 64vh, 96px);
  }
  @keyframes particle-animation-12 {
    100% {
      transform: translate3d(55vw, 53vh, 88px);
    }
  }
  .particle:nth-child(12) {
    animation: particle-animation-12 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.47;
    animation-delay: -4.8s;
    background-color: var(--green);
    transform: translate3d(42vw, 3vh, 38px);
  }
  @keyframes particle-animation-13 {
    100% {
      transform: translate3d(73vw, 62vh, 94px);
    }
  }
  .particle:nth-child(13) {
    animation: particle-animation-13 60s infinite;
    height: 8px;
    width: 8px;
    opacity: 0.86;
    animation-delay: -5.2s;
    background-color: var(--darkBlue);
    transform: translate3d(44vw, 51vh, 57px);
  }
  @keyframes particle-animation-14 {
    100% {
      transform: translate3d(45vw, 30vh, 41px);
    }
  }
  .particle:nth-child(14) {
    animation: particle-animation-14 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.11;
    animation-delay: -5.6s;
    background-color: var(--darkBlue);
    transform: translate3d(16vw, 40vh, 20px);
  }
  @keyframes particle-animation-15 {
    100% {
      transform: translate3d(57vw, 81vh, 50px);
    }
  }
  .particle:nth-child(15) {
    animation: particle-animation-15 60s infinite;
    height: 6px;
    width: 6px;
    opacity: 0.38;
    animation-delay: -6s;
    background-color: var(--darkBlue);
    transform: translate3d(10vw, 66vh, 75px);
  }
  @keyframes particle-animation-16 {
    100% {
      transform: translate3d(81vw, 59vh, 32px);
    }
  }
  .particle:nth-child(16) {
    animation: particle-animation-16 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.02;
    animation-delay: -6.4s;
    background-color: var(--darkBlue);
    transform: translate3d(3vw, 63vh, 14px);
  }
  @keyframes particle-animation-17 {
    100% {
      transform: translate3d(80vw, 82vh, 64px);
    }
  }
  .particle:nth-child(17) {
    animation: particle-animation-17 60s infinite;
    height: 7px;
    width: 7px;
    opacity: 0.95;
    animation-delay: -6.8s;
    background-color: var(--darkBlue);
    transform: translate3d(23vw, 75vh, 44px);
  }
  @keyframes particle-animation-18 {
    100% {
      transform: translate3d(3vw, 77vh, 67px);
    }
  }
  .particle:nth-child(18) {
    animation: particle-animation-18 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.85;
    animation-delay: -7.2s;
    background-color: var(--darkBlue);
    transform: translate3d(58vw, 31vh, 52px);
  }
  @keyframes particle-animation-19 {
    100% {
      transform: translate3d(19vw, 57vh, 60px);
    }
  }
  .particle:nth-child(19) {
    animation: particle-animation-19 60s infinite;
    height: 7px;
    width: 7px;
    opacity: 0.06;
    animation-delay: -7.6s;
    background-color: var(--darkBlue);
    transform: translate3d(4vw, 90vh, 68px);
  }
  @keyframes particle-animation-20 {
    100% {
      transform: translate3d(50vw, 73vh, 52px);
    }
  }
  .particle:nth-child(20) {
    animation: particle-animation-20 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.55;
    animation-delay: -8s;
    background-color: var(--darkBlue);
    transform: translate3d(38vw, 72vh, 68px);
  }
  @keyframes particle-animation-21 {
    100% {
      transform: translate3d(84vw, 90vh, 77px);
    }
  }
  .particle:nth-child(21) {
    animation: particle-animation-21 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.7;
    animation-delay: -8.4s;
    background-color: var(--darkBlue);
    transform: translate3d(21vw, 48vh, 51px);
  }
  @keyframes particle-animation-22 {
    100% {
      transform: translate3d(62vw, 24vh, 100px);
    }
  }
  .particle:nth-child(22) {
    animation: particle-animation-22 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.47;
    animation-delay: -8.8s;
    background-color: var(--darkBlue);
    transform: translate3d(2vw, 74vh, 58px);
  }
  @keyframes particle-animation-23 {
    100% {
      transform: translate3d(42vw, 2vh, 20px);
    }
  }
  .particle:nth-child(23) {
    animation: particle-animation-23 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.93;
    animation-delay: -9.2s;
    background-color: var(--darkBlue);
    transform: translate3d(27vw, 49vh, 81px);
  }
  @keyframes particle-animation-24 {
    100% {
      transform: translate3d(17vw, 37vh, 47px);
    }
  }
  .particle:nth-child(24) {
    animation: particle-animation-24 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.13;
    animation-delay: -9.6s;
    background-color: var(--green);
    transform: translate3d(80vw, 37vh, 61px);
  }
  @keyframes particle-animation-25 {
    100% {
      transform: translate3d(84vw, 33vh, 13px);
    }
  }
  .particle:nth-child(25) {
    animation: particle-animation-25 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.98;
    animation-delay: -10s;
    background-color: var(--green);
    transform: translate3d(41vw, 84vh, 98px);
  }
  @keyframes particle-animation-26 {
    100% {
      transform: translate3d(24vw, 10vh, 20px);
    }
  }
  .particle:nth-child(26) {
    animation: particle-animation-26 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.36;
    animation-delay: -10.4s;
    background-color: var(--green);
    transform: translate3d(80vw, 27vh, 76px);
  }
  @keyframes particle-animation-27 {
    100% {
      transform: translate3d(57vw, 57vh, 18px);
    }
  }
  .particle:nth-child(27) {
    animation: particle-animation-27 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.7;
    animation-delay: -10.8s;
    background-color: var(--green);
    transform: translate3d(40vw, 77vh, 34px);
  }
  @keyframes particle-animation-28 {
    100% {
      transform: translate3d(81vw, 72vh, 66px);
    }
  }
  .particle:nth-child(28) {
    animation: particle-animation-28 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.61;
    animation-delay: -11.2s;
    background-color: var(--green);
    transform: translate3d(51vw, 65vh, 74px);
  }
  @keyframes particle-animation-29 {
    100% {
      transform: translate3d(83vw, 21vh, 15px);
    }
  }
  .particle:nth-child(29) {
    animation: particle-animation-29 60s infinite;
    height: 6px;
    width: 6px;
    opacity: 0.24;
    animation-delay: -11.6s;
    background-color: var(--green);
    transform: translate3d(43vw, 13vh, 70px);
  }
  @keyframes particle-animation-30 {
    100% {
      transform: translate3d(18vw, 35vh, 71px);
    }
  }
  .particle:nth-child(30) {
    animation: particle-animation-30 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.07;
    animation-delay: -12s;
    background-color: var(--green);
    transform: translate3d(42vw, 63vh, 23px);
  }
  @keyframes particle-animation-31 {
    100% {
      transform: translate3d(87vw, 73vh, 21px);
    }
  }
  .particle:nth-child(31) {
    animation: particle-animation-31 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.51;
    animation-delay: -12.4s;
    background-color: var(--green);
    transform: translate3d(33vw, 56vh, 54px);
  }
  @keyframes particle-animation-32 {
    100% {
      transform: translate3d(36vw, 89vh, 57px);
    }
  }
  .particle:nth-child(32) {
    animation: particle-animation-32 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.32;
    animation-delay: -12.8s;
    background-color: var(--green);
    transform: translate3d(15vw, 22vh, 22px);
  }
  @keyframes particle-animation-33 {
    100% {
      transform: translate3d(63vw, 7vh, 82px);
    }
  }
  .particle:nth-child(33) {
    animation: particle-animation-33 60s infinite;
    height: 6px;
    width: 6px;
    opacity: 0.73;
    animation-delay: -13.2s;
    background-color: var(--green);
    transform: translate3d(31vw, 89vh, 1px);
  }
  @keyframes particle-animation-34 {
    100% {
      transform: translate3d(46vw, 47vh, 73px);
    }
  }
  .particle:nth-child(34) {
    animation: particle-animation-34 60s infinite;
    height: 6px;
    width: 6px;
    opacity: 0.93;
    animation-delay: -13.6s;
    background-color: var(--green);
    transform: translate3d(82vw, 51vh, 95px);
  }
  @keyframes particle-animation-35 {
    100% {
      transform: translate3d(51vw, 79vh, 72px);
    }
  }
  .particle:nth-child(35) {
    animation: particle-animation-35 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.83;
    animation-delay: -14s;
    background-color: var(--green);
    transform: translate3d(83vw, 57vh, 53px);
  }
  @keyframes particle-animation-36 {
    100% {
      transform: translate3d(35vw, 58vh, 60px);
    }
  }
  .particle:nth-child(36) {
    animation: particle-animation-36 60s infinite;
    height: 7px;
    width: 7px;
    opacity: 0.92;
    animation-delay: -14.4s;
    background-color: var(--green);
    transform: translate3d(25vw, 84vh, 27px);
  }
  @keyframes particle-animation-37 {
    100% {
      transform: translate3d(87vw, 52vh, 73px);
    }
  }
  .particle:nth-child(37) {
    animation: particle-animation-37 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.97;
    animation-delay: -14.8s;
    background-color: var(--green);
    transform: translate3d(58vw, 52vh, 86px);
  }
  @keyframes particle-animation-38 {
    100% {
      transform: translate3d(86vw, 72vh, 76px);
    }
  }
  .particle:nth-child(38) {
    animation: particle-animation-38 60s infinite;
    height: 7px;
    width: 7px;
    opacity: 0.14;
    animation-delay: -15.2s;
    background-color: var(--green);
    transform: translate3d(88vw, 72vh, 32px);
  }
  @keyframes particle-animation-39 {
    100% {
      transform: translate3d(35vw, 24vh, 77px);
    }
  }
  .particle:nth-child(39) {
    animation: particle-animation-39 60s infinite;
    height: 8px;
    width: 8px;
    opacity: 0.76;
    animation-delay: -15.6s;
    background-color: var(--green);
    transform: translate3d(39vw, 73vh, 16px);
  }
  @keyframes particle-animation-40 {
    100% {
      transform: translate3d(26vw, 85vh, 60px);
    }
  }
  .particle:nth-child(40) {
    animation: particle-animation-40 60s infinite;
    height: 6px;
    width: 6px;
    opacity: 0.5;
    animation-delay: -16s;
    background-color: var(--blue);
    transform: translate3d(49vw, 56vh, 4px);
  }
  @keyframes particle-animation-41 {
    100% {
      transform: translate3d(79vw, 77vh, 2px);
    }
  }
  .particle:nth-child(41) {
    animation: particle-animation-41 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.96;
    animation-delay: -16.4s;
    background-color: var(--blue);
    transform: translate3d(86vw, 52vh, 17px);
  }
  @keyframes particle-animation-42 {
    100% {
      transform: translate3d(87vw, 90vh, 23px);
    }
  }
  .particle:nth-child(42) {
    animation: particle-animation-42 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.86;
    animation-delay: -16.8s;
    background-color: var(--blue);
    transform: translate3d(50vw, 10vh, 45px);
  }
  @keyframes particle-animation-43 {
    100% {
      transform: translate3d(22vw, 11vh, 74px);
    }
  }
  .particle:nth-child(43) {
    animation: particle-animation-43 60s infinite;
    height: 9px;
    width: 9px;
    opacity: 0.88;
    animation-delay: -17.2s;
    background-color: var(--blue);
    transform: translate3d(57vw, 77vh, 26px);
  }
  @keyframes particle-animation-44 {
    100% {
      transform: translate3d(33vw, 23vh, 66px);
    }
  }
  .particle:nth-child(44) {
    animation: particle-animation-44 60s infinite;
    height: 8px;
    width: 8px;
    opacity: 0.56;
    animation-delay: -17.6s;
    background-color: var(--blue);
    transform: translate3d(19vw, 74vh, 12px);
  }
  @keyframes particle-animation-45 {
    100% {
      transform: translate3d(2vw, 74vh, 62px);
    }
  }
  .particle:nth-child(45) {
    animation: particle-animation-45 60s infinite;
    height: 8px;
    width: 8px;
    opacity: 0.37;
    animation-delay: -18s;
    background-color: var(--blue);
    transform: translate3d(29vw, 78vh, 30px);
  }
  @keyframes particle-animation-46 {
    100% {
      transform: translate3d(46vw, 78vh, 7px);
    }
  }
  .particle:nth-child(46) {
    animation: particle-animation-46 60s infinite;
    height: 7px;
    width: 7px;
    opacity: 0.35;
    animation-delay: -18.4s;
    background-color: var(--blue);
    transform: translate3d(4vw, 16vh, 4px);
  }
  @keyframes particle-animation-47 {
    100% {
      transform: translate3d(15vw, 6vh, 75px);
    }
  }
  .particle:nth-child(47) {
    animation: particle-animation-47 60s infinite;
    height: 7px;
    width: 7px;
    opacity: 0.82;
    animation-delay: -18.8s;
    background-color: var(--green);
    transform: translate3d(9vw, 47vh, 57px);
  }
  @keyframes particle-animation-48 {
    100% {
      transform: translate3d(1vw, 9vh, 56px);
    }
  }
  .particle:nth-child(48) {
    animation: particle-animation-48 60s infinite;
    height: 10px;
    width: 10px;
    opacity: 0.67;
    animation-delay: -19.2s;
    background-color: var(--green);
    transform: translate3d(54vw, 43vh, 71px);
  }
  @keyframes particle-animation-49 {
    100% {
      transform: translate3d(23vw, 40vh, 91px);
    }
  }
  .particle:nth-child(49) {
    animation: particle-animation-49 60s infinite;
    height: 6px;
    width: 6px;
    opacity: 0.83;
    animation-delay: -19.6s;
    background-color: var(--green);
    transform: translate3d(10vw, 69vh, 55px);
  }
  @keyframes particle-animation-50 {
    100% {
      transform: translate3d(2vw, 24vh, 4px);
    }
  }
  .particle:nth-child(50) {
    animation: particle-animation-50 60s infinite;
    height: 6px;
    width: 6px;
    opacity: 0.84;
    animation-delay: -20s;
    background-color: var(--green);
    transform: translate3d(36vw, 89vh, 83px);
  }
  .particle {
    position: absolute;
    border-radius: 50%;
  }
`
