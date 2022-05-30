import React from 'react'
import './footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function Footer() {
    return (
        <footer>
            Stefano Aragoni
            <div className="f_horizontal">
                <a href="https://github.com/stefanoaragoni" target="_blank" rel="noreferrer"><BsGithub size={30} /></a>
                <a href="https://linkedin.com/in/stefanoaragoni" target="_blank" rel="noreferrer"><BsLinkedin size={30} /></a>
            </div>
        </footer>
    )
}

export default Footer
