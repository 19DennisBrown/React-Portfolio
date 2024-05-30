import React, { useEffect } from 'react'
import './SkillCard.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SkillCard = ({title, iconUrl, isActive, onClick}) => {
  useEffect(()=>{
  Aos.init({duration:1000})
})
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={()=>onClick()}
      data-aos="fade-top"
    >
      <div className='skill-icon'>
        <img className='photo' src={iconUrl} alt={title}/>
      </div>
      <span>{title}</span>
    </div>
  )
}

export default SkillCard