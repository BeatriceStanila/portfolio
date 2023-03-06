import React from "react";
import Link from "next/link";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

function About() {
  return (
    <div className={styles.about} id="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.aboutSection}
      >
        <img src="/avatar.svg" alt="my-avatar" className={styles.avatar} />
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={styles.aboutContent}
        >
          <h1>About Me</h1>
          <h2>Junior Software Developer</h2>

          <p>
            Hi! I'm Beatrice, but you can call me{" "}
            <span className={styles.span}>Bea</span>. After attending a{" "}
            <span className={styles.span}>Brum.js</span> meetup, I discovered a
            deep passion for the field of software development, leading me to
            transition from my former career as a pharmacist to pursue this new
            path.
            <br />
            Fast forward to today, I’ve just completed the{" "}
            <Link href="https://www.schoolofcode.co.uk/" className={styles.soc}>
              School of Code Bootcamp
            </Link>{" "}
            and I couldn’t be more excited about the future! I’m eager to keep
            learning and growing as a software developer, and I’m thrilled to
            put my newly acquired skills and knowledge to use.
            <br />
            I’m on the hunt for exciting opportunities to gain more experience
            and take on new challenges. Whether it’s frontend development,
            backend systems, or anything in between, I’m ready to dive in and
            make my mark on the tech industry.
          </p>

          <Link
            href="mailto:beatrice.stanila@gmail.com"
            className={styles.btn}
            role="button"
          >
            Let's Talk
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
