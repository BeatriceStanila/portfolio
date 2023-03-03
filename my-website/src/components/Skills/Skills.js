import React from "react";
import styles from "./skills.module.css";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

function Skills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Skills</h1>

      <motion.div
        className={styles.gradientCards}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className={styles.card}
        >
          <div className={styles.containerCard}>
            <h2 className={styles.cardTitle}>Frontend</h2>
            <p className={styles.description}>JavaScript</p>
            <p className={styles.description}>React & Next</p>
            <p className={styles.description}>HTML & CSS</p>
            <p className={styles.description}>TailwindCSS</p>
            <p className={styles.description}>FirebaseAuth</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 0.75, 0.75)}
          className={styles.card}
        >
          <div className={styles.containerCard}>
            <h2 className={styles.cardTitle}>Backend</h2>

            <p className={styles.description}>Node.js</p>
            <p className={styles.description}>Express.js</p>
            <p className={styles.description}>PostgreSQL</p>
            <p className={styles.description}>MongoDB</p>
            <p className={styles.description}>RESTful API</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 1, 0.75)}
          className={styles.card}
        >
          <div className={styles.containerCard}>
            <h2 className={styles.cardTitle}>Tools</h2>
            <p className={styles.description}>NPM</p>
            <p className={styles.description}>Github</p>
            <p className={styles.description}>Figma</p>
            <p className={styles.description}>VS Code</p>
            <p className={styles.description}>Postman</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 1.25, 0.75)}
          className={styles.card}
        >
          <div className={styles.containerCard}>
            <h2 className={styles.cardTitle}>Continuing Learning</h2>
            <p className={styles.description}>Redux</p>
            <p className={styles.description}>TypeScript</p>
            <p className={styles.description}>Python</p>
            <p className={styles.description}>PHP</p>
            <p className={styles.description}>AWS</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
