import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GoBook} from 'react-icons/go'
import {GoBriefcase} from 'react-icons/go'
import {AiOutlineMessage} from 'react-icons/ai'

import { useState } from 'react'


const Nav = () => {

  const [activo, setActivo] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() =>  setActivo('#')} className={activo === '#' ? 'activo' : ''}><AiOutlineHome size={20}/></a>
      <a href='#about' onClick={() =>  setActivo('#about')} className={activo === '#about' ? 'activo' : ''}><AiOutlineUser size={20}/></a>
      <a href='#portafolio' onClick={() =>  setActivo('#portafolio')} className={activo === '#portafolio' ? 'activo' : ''}><GoBriefcase size={20}/></a>
      <a href='#experience' onClick={() =>  setActivo('#experience')} className={activo === '#experience' ? 'activo' : ''}><GoBook size={20}/></a>
      <a href='#contact' onClick={() =>  setActivo('#contact')} className={activo === '#contact' ? 'activo' : ''}><AiOutlineMessage size={20}/></a>
    </nav>
  )
}

export default Nav