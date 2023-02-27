import React from "react";

function Navbar() {
  return (
    <nav class="nav">
      <div class="logo">Beatrice Stanila</div>
      <div class="nav-menu">
        <ul>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
