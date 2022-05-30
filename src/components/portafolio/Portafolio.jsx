import React from 'react'
import './portafolio.css'

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <div className='portafolio'>
        <h5>My Work</h5>
        <h2>Portfolio</h2>

        <div className="container c_portafolio">

          <article className='p_item'>
            <div className="p_item-img">
            </div>
            <h3>Calculator</h3>
            <a href="https://github.com" className='boton' target={"_blank"}>GitHub</a>
            <a href="http://juanelcaballo.club/20261/calculadora/" className='boton boton-primary' target={"_blank"}>Demo</a>
          </article>

          <article className='p_item'>
            <div className="p_item-img">
            </div>
            <h3>r.e.m. beauty</h3>
            <a href="https://github.com" className='boton' target={"_blank"}>GitHub</a>
            <a href="http://juanelcaballo.club/20261/rembeauty/" className='boton boton-primary' target={"_blank"}>Demo</a>
          </article>

          <article className='p_item'>
            <div className="p_item-img">
            </div>
            <h3>Memory Game</h3>
            <a href="https://juanelcaballo.club/20261/lab6/index.html" className='boton' target={"_blank"}>GitHub</a>
            <a href="https://github.com" className='boton boton-primary' target={"_blank"}>Demo</a>
          </article>

          <article className='p_item'>
            <div className="p_item-img">
            </div>
            <h3>CSS Drawing</h3>
            <a href="https://github.com" className='boton' target={"_blank"}>GitHub</a>
            <a href="http://juanelcaballo.club/20261/lab4/index.html" className='boton boton-primary' target={"_blank"}>Demo</a>
          </article>

        </div>

      </div>
    </section>
  )
}

export default Portafolio