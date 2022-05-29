import React from 'react'
import './experience.css'
import ProgressBar from "./progress.jsx";
import {AiOutlineHtml5} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <div className='experience'>

        <h5>Skills</h5>
        <h2>Experience</h2>

        <div className="contenedor c_experience">
          <div className="e_left">

            <div className='e_language'>
              <AiOutlineHtml5 className='e_language-icons'/>
              <div class="skill">
                  <p>HTML</p>
                  <div class="skill-bar skill1">
                      <span class="skill-count1">Advanced</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <AiOutlineHtml5 className='e_language-icons'/>
              <div class="skill">
                  <p>CSS</p>
                  <div class="skill-bar skill1">
                      <span class="skill-count1">Advanced</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <AiOutlineHtml5 className='e_language-icons'/>
              <div class="skill">
                  <p>JS</p>
                  <div class="skill-bar skill1">
                      <span class="skill-count1">Advanced</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <AiOutlineHtml5 className='e_language-icons'/>
              <div class="skill">
                  <p>REACT</p>
                  <div class="skill-bar skill1">
                      <span class="skill-count1">Advanced</span>
                  </div>
              </div>
            </div>




          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience