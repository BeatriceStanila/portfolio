import Link from "next/link";
import React from "react";
import styles from "./contact.module.css";
import { motion } from "framer-motion";
import { fadeIn, footerVariants, staggerContainer } from "@/utils/motion";

function Contact() {
  return (
    <motion.footer
      id="contact"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={styles.footer}
    >
      <div className={styles.innerWidth}>
        <div className={styles.containerHome}>
          <h4 className={styles.heading}>Contact Me</h4>
          <button type="button" className={styles.btn}>
            <img src="/avatar.svg" alt="headset" className={styles.avatar} />
            <span>
              <Link href="/" className={styles.home}>
                Back Home
              </Link>
            </span>
          </button>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.horizontalLine} />

          <div className={styles.container}>
            <h4 className={styles.headingContent}>Let's Connect</h4>

            <div className={styles.iconsContainer}>
              <Link href="mailto: beatrice.stanila@gmail.com">
                <img src="/envelope.svg" alt="mail" className={styles.icons} />
              </Link>

              <Link
                href="https://github.com/BeatriceStanila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="githubb.png" alt="github" className={styles.github} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icon.svg" alt="linkedin" className={styles.icons} />
              </Link>
            </div>
            <p className={styles.copyRights}>
              Copyright © 2023 Beatrice Stanila.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Contact;
