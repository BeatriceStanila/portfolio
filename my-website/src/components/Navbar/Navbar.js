"use client";

import { Link } from "react-scroll";
import React from "react";
("use client");
import styles from "./navbar.module.css";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navbar } from "@/utils/motion";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  /** add an event listener to the resize event and update the isMobile state based on the width of the viewport. */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      variants={navbar}
      initial="hidden"
      animate="visible"
      className={styles.nav}
    >
      <div className={styles.logo}>
        <img src="/avatar.svg" alt="logo" />
      </div>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <div className={styles.navMenu}>
          <ul className={styles.listContainer}>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
