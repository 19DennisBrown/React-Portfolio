import React, { useEffect } from 'react'
import './ContactInfoCard.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ContactInfo = ({ iconUrl, text }) => {
  useEffect(()=>{
  Aos.init({duration:1000})
})
  return (
    <section className='contact-details-card' data-aos="fade-left">
      <div className='icon'>
        <img src={iconUrl} alt='data png' />
      </div>
      <p>{text}</p>
    </section>
  )
}

export default ContactInfo