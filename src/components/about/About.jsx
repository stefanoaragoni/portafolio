import React from 'react'
import './about.css'
import selfie from '../../assets/selfie.jpg'
import {SiPython} from 'react-icons/si'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {HiOutlineDesktopComputer} from 'react-icons/hi'




export const About = () => {
  return (
    <section id='about'>
      <h5>Stefano Aragoni</h5>
      <h2>About Me</h2>

      <div className="container c_about">

        <div className="about_me">
          <div className="about_me-img">
            <img src={selfie} alt="Stefano"/>
          </div>
        </div>

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
              <small>Python, Java, ARM Assembly</small>
            </article>

            <article className='a_tarjeta'>
              <HiOutlineDesktopComputer className='a_dibujo'/>
              <h5>Software Developer</h5>
              <small>+50 Coding Projects</small>
            </article>


          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About
