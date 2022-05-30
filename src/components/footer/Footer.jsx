import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      Stefano Aragoni
      <div className="f_horizontal">
        <a href='https://github.com/stefanoaragoni' target={"_blank"}><BsGithub size={30}/></a>
        <a href='https://linkedin.com/in/stefanoaragoni' target={"_blank"}>< BsLinkedin size={30}/></a>
      </div>
    </footer>
  )
}

export default Footer