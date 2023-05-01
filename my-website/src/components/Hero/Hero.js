import React from "react";
import { Link } from "react-scroll";
import styles from "./hero.module.css";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import {
  textContainer,
  staggerContainer,
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
            animate="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.p variants={textVariant(1.2)}>{greeting}</motion.p>
            <motion.h1 variants={textContainer}>
              {Array.from(name).map((letter, index) => (
                <motion.span variants={textVariant2} key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2 variants={textVariant(1.2)}>{intro}</motion.h2>
            <motion.div
              variants={textVariant(1.4)}
              className={styles.heroButtons}
            >
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                class={styles.btn}
                role="button"
              >
                Projects
              </Link>
              <Link
                target="_blank"
                href="./BeatriceOanaStanilaResume.pdf"
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
