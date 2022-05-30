import React from 'react'
import './experience.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3, DiJava, DiPython } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import {
    SiCplusplus, SiKotlin, SiAssemblyscript, SiUnity, SiPostgresql, SiNeo4J,
} from 'react-icons/si'

function Experience() {
    return (
        <div className="longSection">
            <section id="experience">
                <div className="experience">

                    <h5>Skills</h5>
                    <h2>Experience</h2>

                    <div className="contenedor c_experience">
                        <div className="e_left">

                            <div className="e_language">
                                <AiOutlineHtml5 className="e_language-icons" />
                                <div className="skill">
                                    <p>HTML</p>
                                    <div className="skill-bar skill1">
                                        <span className="skill-count1">Advanced</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <DiCss3 className="e_language-icons" />
                                <div className="skill">
                                    <p>CSS</p>
                                    <div className="skill-bar skill1">
                                        <span className="skill-count1">Advanced</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <IoLogoJavascript className="e_language-icons" />
                                <div className="skill">
                                    <p>JS</p>
                                    <div className="skill-bar skill2">
                                        <span className="skill-count2">Intermediate</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <FaReact className="e_language-icons" />
                                <div className="skill">
                                    <p>React</p>
                                    <div className="skill-bar skill2">
                                        <span className="skill-count2">Intermediate</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <DiJava className="e_language-icons" />
                                <div className="skill">
                                    <p>Java</p>
                                    <div className="skill-bar skill1">
                                        <span className="skill-count1">Advanced</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <DiPython className="e_language-icons" />
                                <div className="skill">
                                    <p>Python</p>
                                    <div className="skill-bar skill1">
                                        <span className="skill-count1">Advanced</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <SiCplusplus className="e_language-icons" />
                                <div className="skill">
                                    <p>C++</p>
                                    <div className="skill-bar skill3">
                                        <span className="skill-count3">Beginner</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <SiKotlin className="e_language-icons" />
                                <div className="skill">
                                    <p>Kotlin</p>
                                    <div className="skill-bar skill2">
                                        <span className="skill-count2">Intermediate</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <SiAssemblyscript className="e_language-icons" />
                                <div className="skill">
                                    <p>Assembly</p>
                                    <div className="skill-bar skill1">
                                        <span className="skill-count1">Advanced</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <SiUnity className="e_language-icons" />
                                <div className="skill">
                                    <p>Unity</p>
                                    <div className="skill-bar skill3">
                                        <span className="skill-count3">Beginner</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <SiPostgresql className="e_language-icons" />
                                <div className="skill">
                                    <p>SQL</p>
                                    <div className="skill-bar skill1">
                                        <span className="skill-count1">Advanced</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e_language">
                                <SiNeo4J className="e_language-icons" />
                                <div className="skill">
                                    <p>Neo4J</p>
                                    <div className="skill-bar skill3">
                                        <span className="skill-count3">Beginner</span>
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
