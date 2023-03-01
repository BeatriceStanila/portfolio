import React from "react";
import Link from "next/link";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.aboutSection}>
        <img src="/avatar.svg" alt="my-avatar" className={styles.avatar} />
        <div className={styles.aboutContent}>
          <h1>About Me</h1>
          <h2>Junior Software Developer</h2>
          <p>
            After attending a <span className={styles.span}>Brum.js</span>{" "}
            meetup, I discovered a deep passion for the field of software
            development, leading me to transition from my former career as a
            pharmacist to pursue this new path.
            <br />
            Fast forward to today, and I’ve just completed the{" "}
            <span className={styles.span}>School of Code Bootcamp</span> and I
            couldn’t be more excited about the future! I’m eager to keep
            learning and growing as a software developer, and I’m thrilled to
            put my newly acquired skills and knowledge to use.
            <br />
            I’m on the hunt for exciting opportunities to gain more experience
            and take on new challenges. Whether it’s frontend development,
            backend systems, or anything in between, I’m ready to dive in and
            make my mark on the tech industry.
          </p>
          <Link href="mailto:beatrice.stanila@gmail.com">
            <button className={styles.btn}>Let's Talk</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
