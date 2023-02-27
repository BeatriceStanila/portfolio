import Link from "next/link";
import React from "react";

import MobileMenu from "./MobileMenu/MobileMenu";
import { useState, useEffect } from "react";

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
    <nav className="nav">
      <div className="logo">Beatrice Stanila</div>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <div className="nav-menu">
          <ul>
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
    </nav>
  );
}

export default Navbar;
