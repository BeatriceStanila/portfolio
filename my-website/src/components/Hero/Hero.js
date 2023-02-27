import React from "react";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

export default function Hero({ greeting, name, intro }) {
  return (
    <div className="main">
      <div className="hero">
        <Navbar />
        <div className="hero-content">
          <div>
            <p>{greeting}</p>
            <h1>{name}</h1>
            <h2>{intro}</h2>
            <div className="hero-btn">
              <Link href="#!" class="btn" role="button">
                Projects
              </Link>
              <Link href="#!" class="btn bold" role="button">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
