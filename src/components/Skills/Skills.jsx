import React, { useEffect, useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard.jsx'
import {SKILLS} from '../data/data.js'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(()=>{
   Aos.init({duration:1000})
 })

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])
  const handleSeletectedSkill = (data)=>{
    setSelectedSkill(data)
  }
  return (
    <section className='skills-container' data-aos="fade-left">
      <h5>Technical Profiency</h5>
      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item)=>(
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={()=>{
                handleSeletectedSkill(item)
              }}
            />
          ))}
        </div>

        <div className='skills-info'>
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills