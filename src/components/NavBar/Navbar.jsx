import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu=()=>{
    setOpenMenu(!openMenu)
  }
  return (
    <div>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className='nav-wrapper' >
        <div className='nav-content'>
          <img className='logo'src='/src/images/logo192.png' alt='logo here'/>
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

          <button className='menu-btn' onClick={toggleMenu} >
            {openMenu ? "close" : "menu"}
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar