import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css';

import {getImageURL} from '../../utils';



export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>AJ</a>
        <div className={`${styles.menu} `}>
            <img src={menuOpen ? getImageURL("nav/closeIcon.png"):getImageURL("nav/menuIcon.png")} 
            alt="Menu-Button" 
            className={styles.menuBtn} 
            onClick={()=>setMenuOpen(!menuOpen)}
            />
           <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
           onClick={() => setMenuOpen(!menuOpen) }>
                
                {/* <li>
                    <a className={styles.icon} href='https://leetcode.com/u/khamseaffan/' target="_blank"><img src={getImageURL("contact/leetcodeIcon.png")} alt="LinkedIn" /></a>
                </li> */}
                <li>
                <a className={styles.icon} href='https://www.linkedin.com/in/adnanjakati' target='blank'><img src={getImageURL("contact/linkedinIcon.png")} alt="LinkedIn" /></a>
                </li>
                <li>
                <a className={styles.icon} href='https://github.com/jackhax' target='blank'><img src={getImageURL("contact/githubIcon.png")} alt="GitHub" /></a>
                </li>
          
           </ul>
        </div> 
    </nav>
  )
}
          