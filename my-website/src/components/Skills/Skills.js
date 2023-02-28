import React from "react";

function Skills() {
  return (
    <div id="skills" className="skills">
      <div>
        <h1>My skills</h1>
        <div className="skills-container">
          <div className="skills-frontend">
            <img src="/data.svg" className="svg" />
            <ul>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>React & Next</li>
              <li>Firebase Auth</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div className="skills-backend">
            <img src="/programming.svg" className="svg" />
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>RESTful API</li>
            </ul>
          </div>
          <div className="skills-tools">
            <img src="/technology.svg" className="svg" />
            <ul>
              <li>VS Code</li>
              <li>NPM</li>
              <li>Git & Github</li>
              <li>Jest & Supertest</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="skills-tolearn">
            <img src="/interests.svg" className="svg" />
            <ul>
              <li>AWS</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Redux</li>
              <li>Codewars & Leetcode</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
