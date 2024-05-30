import React from 'react'
import './MobileNav.css'


const MobileNav = ({isOpen, toggleMenu}) => {

  return (
    <div>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
          <ul>
            <li>
              <p className='menu-item'>Home</p>
            </li>
            <li>
              <p className='menu-item'>Skills</p>
            </li>
            <li>
              <p className='menu-item'>Work experience</p>
            </li>
            <li>
              <p className='menu-item'>Contact me</p>
            </li>

            <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default MobileNav