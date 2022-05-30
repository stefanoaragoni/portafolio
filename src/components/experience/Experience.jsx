import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3, DiJava, DiPython} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiCplusplus, SiKotlin, SiAssemblyscript, SiUnity, SiPostgresql, SiNeo4J} from 'react-icons/si'



const Experience = () => {
  return (
    <div className='longSection'>
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
              <DiCss3 className='e_language-icons'/>
              <div class="skill">
                  <p>CSS</p>
                  <div class="skill-bar skill1">
                      <span class="skill-count1">Advanced</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <IoLogoJavascript className='e_language-icons'/>
              <div class="skill">
                  <p>JS</p>
                  <div class="skill-bar skill2">
                      <span class="skill-count2">Intermediate</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <FaReact className='e_language-icons'/>
              <div class="skill">
                  <p>React</p>
                  <div class="skill-bar skill2">
                      <span class="skill-count2">Intermediate</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <DiJava className='e_language-icons'/>
              <div class="skill">
                  <p>Java</p>
                  <div class="skill-bar skill1">
                      <span class="skill-count1">Advanced</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <DiPython className='e_language-icons'/>
              <div class="skill">
                  <p>Python</p>
                  <div class="skill-bar skill1">
                      <span class="skill-count1">Advanced</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <SiCplusplus className='e_language-icons'/>
              <div class="skill">
                  <p>C++</p>
                  <div class="skill-bar skill3">
                      <span class="skill-count3">Beginner</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <SiKotlin className='e_language-icons'/>
              <div class="skill">
                  <p>Kotlin</p>
                  <div class="skill-bar skill2">
                      <span class="skill-count2">Intermediate</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <SiAssemblyscript className='e_language-icons'/>
              <div class="skill">
                  <p>Assembly</p>
                  <div class="skill-bar skill1">
                      <span class="skill-count1">Advanced</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <SiUnity className='e_language-icons'/>
              <div class="skill">
                  <p>Unity</p>
                  <div class="skill-bar skill3">
                      <span class="skill-count3">Beginner</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <SiPostgresql className='e_language-icons'/>
              <div class="skill">
                  <p>SQL</p>
                  <div class="skill-bar skill1">
                      <span class="skill-count1">Advanced</span>
                  </div>
              </div>
            </div>

            <div className='e_language'>
              <SiNeo4J className='e_language-icons'/>
              <div class="skill">
                  <p>Neo4J</p>
                  <div class="skill-bar skill3">
                      <span class="skill-count3">Beginner</span>
                  </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Experience