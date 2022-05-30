import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function Social() {
    return (
        <div className="h_social">
            <a href="https://github.com/stefanoaragoni" target="_blank" rel="noreferrer"><BsGithub size={30} /></a>
            <a href="https://linkedin.com/in/stefanoaragoni" target="_blank" rel="noreferrer"><BsLinkedin size={30} /></a>
        </div>
    )
}

export default Social
