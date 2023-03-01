import React from "react";
import Link from "next/link";
import styles from "../navbar.module.css";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function MobileMenu() {
  const [navbar, setNavbar] = useState("");

  // function that handles the hamburger menu
  function handleNavbar() {
    setNavbar(!navbar);
  }

  return (
    <nav>
      <div className={styles.mobileIcons} onClick={handleNavbar}>
        {navbar ? (
          <AiOutlineClose className={styles.burgerClose} />
        ) : (
          <AiOutlineMenu className={styles.burgerOpen} />
        )}
      </div>
      <div className={styles.mobileNav}>
        {/* /*li elements are only rendered when navbar is true* */}
        <ul className={styles.listContainer}>
          {navbar && (
            <ul className={styles.mobileLinks}>
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
          )}
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
