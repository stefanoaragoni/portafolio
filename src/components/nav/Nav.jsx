import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GoBook} from 'react-icons/go'
import {GoBriefcase} from 'react-icons/go'
import {AiOutlineMessage} from 'react-icons/ai'



const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome size={20}/></a>
      <a href='#about'><AiOutlineUser size={20}/></a>
      <a href='#experience'><GoBook size={20}/></a>
      <a href='#portafolio'><GoBriefcase size={20}/></a>
      <a href='#contact'><AiOutlineMessage size={20}/></a>
    </nav>
  )
}

export default Nav