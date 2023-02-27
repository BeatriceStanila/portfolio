import React from "react";
import Link from "next/link";
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
      <div className="mobile-icons" onClick={handleNavbar}>
        {navbar ? (
          <AiOutlineClose className="burger-close" />
        ) : (
          <AiOutlineMenu className="burger-open" />
        )}
      </div>
      <div className="mobile-nav">
        {/* /*li elements are only rendered when navbar is true* */}
        <ul className={`nav-links ${navbar ? "nav-active" : ""}`}>
          {navbar && (
            <>
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
