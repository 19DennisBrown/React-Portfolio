import React, { useEffect, useRef } from 'react'
import './Projects.css'
import { PROJECTS } from '../data/data'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import Slider from "react-slick"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
   useEffect(()=>{
    Aos.init({duration:1000})
  })
  const sliderRef = useRef()
  const settings ={
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const sliderRight=()=>{
    sliderRef.current.slickNext()
  }
  const sliderLeft=()=>{
    sliderRef.current.slickPrev()
  }
  return (
    <section className='projects-container' data-aos="fade-right">
      <h5>projects involved</h5>
      <div className='project-content'>
        <div className='arrow-right' onClick={sliderRight}>
          <span>{'>>'}</span>
        </div>
        <div className='arrow-left'  onClick={sliderLeft}>
          <span>{'<<'}</span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item)=>(
            <ProjectsCard key={item.title} details={item}/>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects