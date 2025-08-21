import React from 'react'
import './Hero.css'
import MyPic from '../../assets/MyPic.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={MyPic} alt="" />
      <h1><span >Hello! I’m Marika Ganczarczyk,</span> a Junior Frontend Developer passionate about building clean, responsive, and user-friendly websites. Welcome to my portfolio — here you’ll find some of my recent projects and skills. </h1>
      <p>With a unique background in payroll, accounts, and credit control, I transitioned into tech to develop strong skills in programming, problem-solving, and building clean, responsive web applications. I combine analytical thinking with creativity to deliver practical, user-friendly solutions, and I’m eager to grow while contributing to impactful projects.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-linkedin"><a href="http://www.linkedin.com/in/marika-gańczarczyk-1144ab295" target="_blank"
        rel="noopener noreferrer">My LinkedIn</a></div>
         <div className="hero-github"><a href="https://github.com/MarikaGanczarczyk" target="_blank"
        rel="noopener noreferrer">My GitHub</a></div>
      </div>
    </div>
  )
}

export default Hero
