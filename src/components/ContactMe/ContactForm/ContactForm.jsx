import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
      <form>
        <div className='name-container'>
          <input type='text' name='firstname' placeholder='eg Johnson'/>
          <input type='text' name='lastname' placeholder='eg Brad'/>
        </div>
          <input type='email' name='email' placeholder='eg johnson@gmail.com'/>
          <textarea type='text' name='message' placeholder='eg let us cooperate.....' rows={3}/>
          <button>send</button>

      </form>
    </div>
  )
}

export default ContactForm