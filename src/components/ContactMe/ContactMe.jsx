import React, { useEffect } from 'react'
import './ContactMe.css'
import ContactInfo from './ContactInfo/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ContactMe = () => {
  useEffect(()=>{
   Aos.init({duration:1000})
 })
  return (
    <section className='contact-container' data-aos="fade-right">
      <h5>contact me</h5>
      <div className='contact-content'>
        <div style={{ flex:1 }}>
          <ContactInfo
            iconUrl={`${process.env.PUBLIC_URL}/assets/images/icons8-python.svg`}
            text='mail@mail.com'
          />
          <ContactInfo
            iconUrl={`${process.env.PUBLIC_URL}/assets/images/icons8-css.svg`}
            text='github.com'
          />
        </div>
        <div style={{ flex:1 }}>
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactMe