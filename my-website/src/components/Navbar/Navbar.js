"use client";
import Link from "next/link";
import React from "react";
("use client");
import styles from "./navbar.module.css";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

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
      variants={slideIn("up", "tween", 0.75, 1)}
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
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#skills">Skills</Link>
            </li>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
