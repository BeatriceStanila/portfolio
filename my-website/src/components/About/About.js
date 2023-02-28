import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-section">
        <img src="/avatar.svg" />
        <div className="about-content">
          <h1>About Me</h1>
          <h2>Junior Software Developer</h2>
          <p>
            After attending a Brum.js meetup, I discovered a deep passion for
            the field of software development, leading me to transition from my
            former career as a pharmacist to pursue this new path.
            <br />
            Fast forward to today, and I’ve just completed the School of Code
            Bootcamp and I couldn’t be more excited about the future! I’m eager
            to keep learning and growing as a software developer, and I’m
            thrilled to put my newly acquired skills and knowledge to use.
            <br />
            I’m on the hunt for exciting opportunities to gain more experience
            and take on new challenges. Whether it’s frontend development,
            backend systems, or anything in between, I’m ready to dive in and
            make my mark on the tech industry.
          </p>
          <button className="about-btn">Let's Talk</button>
        </div>
      </div>
    </div>
  );
}

export default About;
