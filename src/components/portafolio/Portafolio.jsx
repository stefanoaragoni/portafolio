import React from 'react'
import './portafolio.css'
import calc from "../../assets/calc.png"
import css from "../../assets/css.png"
import memory from "../../assets/memory.png"
import rem from "../../assets/rem.png"

const Portafolio = () => {
  return (
    <div className="vh_large">
    <section id='portafolio'>
      <div className='portafolio'>
        <h5>My Work</h5>
        <h2>Portfolio</h2>

        <div className="contenedor c_portafolio">

          <article className='p_item'>
            <div className="p_item-img">
              <img src={rem} alt="REM Beauty"/>
            </div>
            <h3>r.e.m. beauty</h3>

            <div className='c_botones'>
              <a href="https://github.com" className='boton' target={"_blank"}>GitHub</a>
              <a href="http://juanelcaballo.club/20261/rembeauty/" className='boton boton-primary' target={"_blank"}>Demo</a>
            </div>
          </article>

          <article className='p_item'>
            <div className="p_item-img">
              <img src={memory} alt="Memory Game"/>
            </div>
            <h3>Memory Game</h3>
            <div className='c_botones'>
              <a href="https://juanelcaballo.club/20261/lab6/index.html" className='boton' target={"_blank"}>GitHub</a>
              <a href="https://github.com" className='boton boton-primary' target={"_blank"}>Demo</a>
            </div>
          </article>

          <article className='p_item'>
            <div className="p_item-img">
              <img src={css} alt="CSS Drawing"/>
            </div>
            <h3>CSS Drawing</h3>
            <div className='c_botones'>
              <a href="https://github.com" className='boton' target={"_blank"}>GitHub</a>
              <a href="http://juanelcaballo.club/20261/lab4/index.html" className='boton boton-primary' target={"_blank"}>Demo</a>
            </div>
          </article>

          <article className='p_item'>
            <div className="p_item-img">
              <img src={calc} alt="Calculator"/>
            </div>
            <h3>Calculator</h3>
            <div className='c_botones'>
              <a href="https://github.com" className='boton' target={"_blank"}>GitHub</a>
              <a href="http://juanelcaballo.club/20261/calculadora/" className='boton boton-primary' target={"_blank"}>Demo</a>
            </div>
          </article>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Portafolio