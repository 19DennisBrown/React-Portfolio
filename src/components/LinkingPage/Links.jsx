
import {Link} from 'react-router-dom'
import './stylesheet/links.css'
import styles from './stylesheet/app.module.css'
import { useState } from 'react'

function Linking(){
  // const styleMe = {
  //   color:'green'
  // }
  const [link, setLinks] = useState(false)
  
  const handleChange=()=>{
    setLinks(!link)
  }
  return(
    <div className='links-page'>
      <header>
        <h1 style={{color:''}} className={styles.link_header}>
          React Lessons
        </h1>
      </header>
      <div className={styles.btn_container}>
        <p className={styles.menu_word}>Menu</p>
        <button onClick={handleChange}
          className={styles.navBtn}
          >
          { link ? 
        <p>❌</p>
      :
        
          <p>✅ </p>
        }
        </button>
      </div>
      <nav className={link ? 'nav': 'navHide' } >
        <div >
          <i>logo</i>
        </div>
        <ul className={styles.links } >
          {
            link ? <>
               <li  style={{color:'red', textDecoration:'none'}}><Link to="/form" style={{color:'red', textDecoration:'none'}} onClick={handleChange}>Form</Link></li>

              <li ><Link to="/list" style={{color:'red', textDecoration:'none'}} onClick={handleChange}>list</Link></li>
              
              <li><Link to="/fetch"  style={{color:'red', textDecoration:'none'}} onClick={handleChange}>fetch</Link></li>
            </> :   
            <div className={styles.navHide}></div>         
          }
         
        </ul>
      </nav>
    </div>
  )
}

export default Linking