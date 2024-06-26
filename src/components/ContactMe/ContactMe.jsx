import React from 'react'
import './ContactMe.css'
import ContactInfo from './ContactInfo/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {

  return (
    <section className='contact-container' data-aos="fade-right">
      <h5>contact me</h5>
      <div className='contact-content'>
        <div style={{ flex:1 }}>
          <ContactInfo
            iconUrl={`${process.env.PUBLIC_URL}/assets/images/icons8-django.svg`}
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