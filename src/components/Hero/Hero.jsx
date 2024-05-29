import React from 'react'
import './Hero.css'
import pic from '../assets/images/Seven_Samurai_poster4.jpg'
const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Building digital experience that inspire</h2>
        <p>
          Passionate Software Developer | Fullstack | Transformimg ideas into stunning web solutions
        </p>
      </div>
      <div className='hero-img'>
        <div className='samurai-pic'>
          <div className='tech-icon'>
            <img  src={`${process.env.PUBLIC_URL}/assets/images/1530186871.svg`} alt='samurai png'/>          
          </div>
            <img src={pic} alt='samurai png'/>
        </div>
        <div>
          <div className='tech-icon'>
            <img  src={`${process.env.PUBLIC_URL}/assets/images/1530186871.svg`} alt='samurai png'/>          
          </div>
          <div   className='tech-icon'>
            <img className='xom'  src={`${process.env.PUBLIC_URL}/assets/images/1530186871.svg`} alt='samurai png'/>          
          </div>
          <div className='tech-icon'>
            <img  src={`${process.env.PUBLIC_URL}/assets/images/1530186871.svg`} alt='samurai png'/>          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero