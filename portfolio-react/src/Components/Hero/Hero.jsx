import React from 'react'
import './Hero.css'
import MyPic from '../../assets/MyPic.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      {/* <img src={MyPic} alt="" /> */}
      <h1><span >Hi! I’m Marika Ganczarczyk,</span> a Junior Full Stack Developer passionate about building clean, responsive, and user-friendly websites. Welcome to my portfolio — here you’ll find some of my recent projects and skills. </h1>
      <p>I'm not a typical developer—and that's the point. My journey from finance to tech wasn't a straight line, but every detour taught me something valuable about solving real problems. I'm comfortable being uncomfortable, whether that's learning a new programming language or understanding a complex business domain. I bring curiosity, adaptability, and a knack for translating messy challenges into clean solutions.
</p>
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
