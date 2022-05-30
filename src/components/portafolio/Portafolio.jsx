import React from 'react'
import './portafolio.css'
import calc from "../../assets/calc.png"
import css from "../../assets/css.png"
import memory from "../../assets/memory.png"
import rem from "../../assets/rem.png"

import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const Portafolio = () => {

  const porta = [
    {
      nombre: "r.e.m. beauty",
      imagen: rem,
      git: "https://github.com/stefanoaragoni/REM_beauty",
      juan:"http://juanelcaballo.club/20261/rembeauty/"
    },    
    {
      nombre: "Memory Game",
      imagen: memory,
      git: "https://github.com/stefanoaragoni/memoriaNicki",
      juan:"https://juanelcaballo.club/20261/lab6/index.html"
    },
    {
      nombre: "CSS Drawing",
      imagen: css,
      git: "https://github.com",
      juan:"http://juanelcaballo.club/20261/lab4/index.html"
    },
    {
      nombre: "Calculator",
      imagen: calc,
      git: "https://github.com/stefanoaragoni/calculadoraWeb",
      juan:"http://juanelcaballo.club/20261/calculadora/"
    },
  ]
  return (
    <div className="vh_large">
    <section id='portafolio'>
      <div className='portafolio'>
        <h5>My Work</h5>
        <h2>Portfolio</h2>

        <div className="grid_center three">
          <Swiper slidesPerView={3} 
          spaceBetween={30} 
          pagination={{clickable: true,}} 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="contenedor c_portafolio">
            {
              porta.map(({nombre, imagen, git, juan}, index) => {
                return(
                  <SwiperSlide key={index} className='p_item'>
                    <div className="p_item-img">
                      <img src={imagen} alt="IMG"/>
                    </div>
                    <h3>{nombre}</h3>
                    <div className='c_botones'>
                      <a href={git} className='boton' target={"_blank"}>GitHub</a>
                      <a href={juan} className='boton boton-primary' target={"_blank"}>Demo</a>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

        <div className="grid_center two">
          <Swiper slidesPerView={2} 
          spaceBetween={30} 
          pagination={{clickable: true,}} 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="contenedor c_portafolio">
            {
              porta.map(({nombre, imagen, git, juan}, index) => {
                return(
                  <SwiperSlide key={index} className='p_item'>
                    <div className="p_item-img">
                      <img src={imagen} alt="IMG"/>
                    </div>
                    <h3>{nombre}</h3>
                    <div className='c_botones'>
                      <a href={git} className='boton' target={"_blank"}>GitHub</a>
                      <a href={juan} className='boton boton-primary' target={"_blank"}>Demo</a>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

        <div className="grid_center one">
          <Swiper slidesPerView={1} 
          spaceBetween={30} 
          pagination={{clickable: true,}} 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="contenedor c_portafolio">
            {
              porta.map(({nombre, imagen, git, juan}, index) => {
                return(
                  <SwiperSlide key={index} className='p_item'>
                    <div className="p_item-img">
                      <img src={imagen} alt="IMG"/>
                    </div>
                    <h3>{nombre}</h3>
                    <div className='c_botones'>
                      <a href={git} className='boton' target={"_blank"}>GitHub</a>
                      <a href={juan} className='boton boton-primary' target={"_blank"}>Demo</a>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Portafolio