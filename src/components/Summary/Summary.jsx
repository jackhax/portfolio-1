import React from 'react';
import styles from "./Summary.module.css";
import { getImageURL } from '../../utils';

export default function Summary() {
  return (
    <section className={styles.container} id="summary">
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm <br />Adnan Jakati</h1>
        <p className={styles.summary}>
          MS in Cybersecurity from New York University, New York, USA <br /><br />
          Cybersecurity Specialist with a focus on Offensive Security and Penetration Testing! Actively seeking full-time opportunities in cybersecurity and software development. <br /><br />
          Skills: Python, C++, Java, JavaScript, React, Node.js, AWS, Docker, CI/CD, Penetration Testing, Application Security, Reverse Engineering, and Malware Analysis.
        </p>
        <div className={styles.BtnsContainer}>
          <a className={styles.Btns} href='/resume.pdf' download>Download Resume/CV</a>
          <a className={styles.icon} href='mailto:adnan.jakati@nyu.edu' aria-label="Email"><img src={getImageURL("contact/emailIcon.png")} alt="Email" /></a>
        </div>
      </div>
      <img className={styles.summaryImg} src={getImageURL("summary/summaryImage.jpg")} alt='Summary Image' />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}
