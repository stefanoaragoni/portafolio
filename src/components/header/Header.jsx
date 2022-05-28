import React from 'react'
import './header.css'
import Social from './Social'
import Laptop from './../../assets/laptop.jpg'

const Header = () => {
  return (
    <header>
      <div className="contenedor h_contenedor">
        <h5></h5>
        <h1>Stefano Aragoni.</h1>
        <h5 className="text-blanco2">Software Developer</h5>

        <Social/>

        <div className='Laptop'>
          <img src={Laptop} alt="Laptop" />
        </div>

      </div>
    </header>
  )
}

export default Header