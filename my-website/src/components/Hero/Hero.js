import React from "react";
import Link from "next/link";
import styles from "./hero.module.css";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textContainer,
  textVariant,
  textVariant2,
} from "@/utils/motion";

export default function Hero({ greeting, name, intro }) {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.heroContent}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.p variants={textVariant(0.5)}>{greeting}</motion.p>
            <motion.h1 variants={textContainer}>
              {Array.from(name).map((letter, index) => (
                <motion.span variants={textVariant2} key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2 variants={textVariant(1.2)}>{intro}</motion.h2>
            <motion.div
              variants={slideIn("left", "tween", 1.4, 1)}
              className={styles.heroButtons}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
