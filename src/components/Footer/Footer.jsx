import React, {useEffect} from 'react'
import './Footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div className='footer' data-aos="fade-down" >
      © 2024 Dennis Brown😎 || Hawawii Inc. Corp.
    </div>
  )
}

export default Footer