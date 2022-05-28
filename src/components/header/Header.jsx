import React from 'react'
import './header.css'
import Social from './Social'

const Header = () => {
  return (
    <header>
      <div className="contenedor h_contenedor">
        <h5></h5>
        <h1>Stefano Aragoni</h1>
        <h5 className="text-blanco2">Fullstack Developer</h5>

        <Social/>

      </div>
    </header>
  )
}

export default Header