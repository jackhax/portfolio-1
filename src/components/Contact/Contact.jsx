import React from "react"
import styles from "./Contact.module.css"
import { getImageURL } from "../../utils"

export default function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" className={styles.icon} />
          <a href="mailto:adnan.jakati@nyu.edu">adnan.jakati@nyu.edu</a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/linkedinIcon.png")} alt="LinkedIn icon" className={styles.icon} />
          <a href="https://www.linkedin.com/in/adnanjakati">linkedin.com/in/adnanjakati</a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="Github icon" className={styles.icon} />
          <a href="https://github.com/jackhax">github.com/jackhax</a>
        </li>
      </ul>
    </footer>
  )
}
