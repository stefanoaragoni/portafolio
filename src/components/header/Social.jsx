import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


const Social = () => {
  return (
    <div className='h_social'>
        <a href='https://github.com/stefanoaragoni' target={"_blank"}><BsGithub size={30}/></a>
        <a href='https://linkedin.com/in/stefanoaragoni' target={"_blank"}>< BsLinkedin size={30}/></a>
    </div>
  )
}

export default Social