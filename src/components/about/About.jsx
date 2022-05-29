import React from 'react'
import './about.css'
import {SiPython} from 'react-icons/si'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {HiOutlineDesktopComputer} from 'react-icons/hi'




export const About = () => {
  return (
    <section id='about'>
      <div className="about">
        <h5>Stefano Aragoni</h5>
        <h2>About Me</h2>

        <div className="contenedor c_about">

          <div className="about_info">

            <div className="a_tarjetas">
              <article className='a_tarjeta'>
                <FaChalkboardTeacher className='a_dibujo'/>
                <h5>Teaching Assistant</h5>
                <small>ARM Assembly Course</small>
              </article>

              <article className='a_tarjeta'>
                <SiPython className='a_dibujo'/>
                <h5>Programming Tutor</h5>
                <small>Python, ARM Assembly</small>
              </article>

              <article className='a_tarjeta'>
                <HiOutlineDesktopComputer className='a_dibujo'/>
                <h5>Software Developer</h5>
                <small>+50 Projects</small>
              </article>
            </div>

            <div className='a_description'>
              I am Stefano Aragoni and I am a third-year computer science student. My passion for technology and programming brought me to Universidad Del Valle de Guatemala (UVG), where I am working on my BS in Computer Science Engineering. 
              Over the last 2 years, I have mantained a 4.0 GPA and have been awarded multiple times for my academic excellence. I am currently working at UVG as a Teaching Assistant and a programming tutor.
              In my free time, I love to listen to music and cook.
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About
