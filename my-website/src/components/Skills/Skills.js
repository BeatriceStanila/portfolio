import React from "react";
import styles from "./skills.module.css";

function Skills() {
  return (
    <div className={styles.container} id="skills">
      <h1 className={styles.title}>My Skills</h1>

      <div className={styles.gradientCards}>
        <div className={styles.card}>
          <div className={styles.containerCard}>
            <h2 className={styles.cardTitle}>Frontend</h2>
            <p className={styles.description}>JavaScript</p>
            <p className={styles.description}>React & Next</p>
            <p className={styles.description}>HTML & CSS</p>
            <p className={styles.description}>TailwindCSS</p>
            <p className={styles.description}>FirebaseAuth</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.containerCard}>
            <h2 className={styles.cardTitle}>Backend</h2>

            <p className={styles.description}>Node.js</p>
            <p className={styles.description}>Express.js</p>
            <p className={styles.description}>PostgreSQL</p>
            <p className={styles.description}>MongoDB</p>
            <p className={styles.description}>RESTful API</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.containerCard}>
            <h2 className={styles.cardTitle}>Tools</h2>
            <p className={styles.description}>NPM</p>
            <p className={styles.description}>VS Code</p>
            <p className={styles.description}>Postman</p>
            <p className={styles.description}>Source Control Git</p>
            <p className={styles.description}>Figma, Kanban, Miro</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.containerCard}>
            <h2 className={styles.cardTitle}>Continuing Learning</h2>
            <p className={styles.description}>Redux</p>
            <p className={styles.description}>TypeScript</p>
            <p className={styles.description}>Python</p>
            <p className={styles.description}>PHP</p>
            <p className={styles.description}>Cloud</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
