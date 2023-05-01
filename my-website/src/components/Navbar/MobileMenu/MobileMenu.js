import React from "react";
import { Link } from "react-scroll";
import styles from "../navbar.module.css";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function MobileMenu() {
  const [navbar, setNavbar] = useState("");

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
        <ul className={styles.listContainer}>
          {navbar && (
            <ul className={styles.mobileLinks}>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={handleNavbar}
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
                  onClick={handleNavbar}
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
                  onClick={handleNavbar}
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
                  onClick={handleNavbar}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
