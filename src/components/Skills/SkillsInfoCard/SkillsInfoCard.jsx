import React, { useEffect } from 'react'
import './SkillsInfoCard.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SkillsInfoCard = ({heading, skills}) => {
    useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div className='skills-info-card' data-aos="fade-bottom">
      <h6>{heading}</h6>
      <div className='skills-info-content'>
        {skills.map((item, index)=>(
          <React.Fragment key={`skill_${index}`}>
            <div className='skill-info'>
              <p>{item.skill}</p>
              <p className='percentage' >{item.percentage}</p>
            </div>
            <div className='skill-progress-bg'>
              <div className='skill-progress' style={{width:item.percentage}}/>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SkillsInfoCard