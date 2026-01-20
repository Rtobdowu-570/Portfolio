import React from 'react'
import  { useState } from 'react';
import Spline from '@splinetool/react-spline';
import '../styles/main.css'

const About = () => {
    const [IsLoading, setIsLoading] = useState(true);
  return (
    <>
    <main className='main'>
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-text">
                    <p>Scaling Visionary Ideas into <span className='hero-emphasis'>Performant Web Apps</span></p>
                </div>
            </div>
            <div className="hero-info">
                <p>Hi, I am Null a React.js Developer</p>
            </div>

            <div className="border-card">
                <a href="#projects" className="card-content">View My Work</a>
            </div>
        </section>

        <section className='about' id='about'>
            <div className="main-container">
                <div className="container">
                    <div className="about-text-container">
                        <div className="spline-wrapper">
                            <Spline scene='../scene.splinecode'
                             onLoad={() => setIsLoading(false)} />
                        </div>
                        <div className="highlight"></div>
                        <div className="about-info" >
                            I am a FrontEnd Developer and Aspiring Blockchain Developer
                            passionate about how things work on the  <span className='hero-emphasize'>Web</span>,  <span className='hero-emphasize'>AI research</span> and 
                            also how to make a difference in the world through <span className='hero-emphasize'>Technology</span>.
                        </div>
                        <div className="about-situation">
                            <h4> <span className='dot'></span> Open to job opportunities <span className='hero-sit-text'> Lagos, Nigeria</span></h4>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="about-tech-info">
                        <h4>Current Tech Stack</h4>
                        <div className="stack-group">

                        <ul className='tech-stack-list first'>
                            <li className='tech-stack odd'>HTML</li>
                            <li className='tech-stack odd'>CSS</li>
                            <li className='tech-stack odd'>Git</li>
                        </ul>

                        <ul className="tech-stack-list second">
                            <li className='tech-stack even'>JavaScript</li>
                            <li className='tech-stack even'>React</li>
                        </ul>
                        </div>
                    </div>

                    <div className="current-expertise">
                        <h4 className='expertise-text'>Current Expertise</h4>
                        <div className="expertise">
                            <ul className="tech-expertise-list">
                            <li className="tech-expertise">Optimization</li>
                            <li className="tech-expertise"> Responsive Design</li>
                            <li className="tech-expertise"> Git</li>
                            <li className="tech-expertise"> FrontEnd Development</li>
                            </ul>
                            <ul className="tech-expertise-list">
                            <li className="tech-expertise">Optimization</li>
                            <li className="tech-expertise"> Responsive Design</li>
                            <li className="tech-expertise"> Git</li>
                            <li className="tech-expertise"> FrontEnd Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default About