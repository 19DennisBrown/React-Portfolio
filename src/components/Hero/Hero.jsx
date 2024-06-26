import React, { useEffect } from 'react'
import './Hero.css'
import pic from '../assets/images/coding.avif'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <section className='hero-container' data-aos="fade-left">
      <div className='hero-content'>
        <h2>Building digital experience that inspire</h2>
        <p>
          Passionate Software Developer | Fullstack | Transformimg ideas into stunning web solutions
        </p>
      </div>
      <div className='hero-img'>
        <div className='samurai-pic'>
          <div className='tech-icon'>
            <img  src={`${process.env.PUBLIC_URL}/assets/images/icons8-css.svg`} alt='css png'/>          
          </div>
            <img src={pic} alt='samurai png'/>
        </div>
        <div>
          <div className='tech-icon'>
            <img  src={`${process.env.PUBLIC_URL}/assets/images/icons8-django.svg`} alt='django png'/>          
          </div>
          <div   className='tech-icon'>
            <img className='xom'  src={`${process.env.PUBLIC_URL}/assets/images/icons8-html.svg`} alt='html png'/>          
          </div>
          <div className='tech-icon'>
            <img  src={`${process.env.PUBLIC_URL}/assets/images/icons8-react-native.svg`} alt='react native  png'/>          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero