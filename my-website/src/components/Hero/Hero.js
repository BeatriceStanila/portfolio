import React from "react";
import Link from "next/link";
import styles from "./hero.module.css";
import Navbar from "../Navbar/Navbar";

export default function Hero({ greeting, name, intro }) {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.heroContent}>
          <div>
            <p>{greeting}</p>
            <h1>{name}</h1>
            <h2>{intro}</h2>
            <div className={styles.heroButtons}>
              <Link href="/#projects" class={styles.btn} role="button">
                Projects
              </Link>
              <Link
                href="./BeatriceStanilaResume.pdf"
                class={styles.btnBold}
                role="button"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
