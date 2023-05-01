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
            Hey there 👋🏻, it's <span className={styles.span}>Bea</span>, or
            Beatrice if you prefer the full name. Almost one year ago, I had a
            life-changing experience at a{" "}
            <span className={styles.span}>Brum.js meetup</span> that sparked a
            deep passion for software development within me. So, I took the
            plunge and left my former career as a pharmacist ⚕️ to pursue this
            new path that fills me with passion and purpose 👩🏻‍💻!
          </p>

          <p>
            I completed the <span />
            <Link
              href="https://www.schoolofcode.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.soc}
            >
              School of Code Bootcamp
            </Link>{" "}
            <span /> in February 2023! The bootcamp was an intensive and
            structured full-stack JavaScript course, and it was hands down the
            best decision I've ever made! Since completing the bootcamp, I'm
            more eager than ever to keep learning and growing as a software
            developer.
          </p>
          <p>
            I'm currently on the lookout for exciting opportunities to gain more
            experience and take on new challenges. Whether it's working on the
            frontend development, backend systems, or anything in between, I'm
            more than ready to dive in and make my mark on the tech industry.
            It's been an incredible journey so far, and I can't wait to see what
            the future holds as I continue to develop my coding skills and
            explore all that this amazing field has to offer!
          </p>

          <Link
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
            className={styles.btn}
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
