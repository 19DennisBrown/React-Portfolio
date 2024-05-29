import React from 'react'
import './ContactInfoCard.css'

const ContactInfo = ({ iconUrl, text }) => {
  return (
    <section className='contact-details-card'>
      <div className='icon'>
        <img src={iconUrl} alt='data png' />
      </div>
      <p>{text}</p>
    </section>
  )
}

export default ContactInfo