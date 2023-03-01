import React from "react";
import styles from "./skills.module.css";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

function Skills() {
  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>My skills</h1>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={styles.container}
        >
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className={styles.frontend}
          >
            <img src="/data.svg" className={styles.svg} />
            <ul className={styles.list}>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>React & Next</li>
              <li>Firebase Auth</li>
              <li>TailwindCSS</li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 0.75, 0.75)}
            className="skills-backend"
          >
            <img src="/programming.svg" className={styles.svg} />
            <ul className={styles.list}>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>RESTful API</li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 1, 0.75)}
            className="skills-tools"
          >
            <img src="/technology.svg" className={styles.svg} />
            <ul className={styles.list}>
              <li>VS Code</li>
              <li>NPM</li>
              <li>Git & Github</li>
              <li>Jest & Supertest</li>
              <li>Figma</li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 1.25, 0.75)}
            className="skills-tolearn"
          >
            <img src="/interests.svg" className={styles.svg} />
            <ul className={styles.list}>
              <li>AWS</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Redux</li>
              <li>Codewars & Leetcode</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
