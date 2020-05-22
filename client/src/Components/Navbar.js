import React from "react";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <a href="index.html">
            <i className="fas fa-code"></i> Hiba Al-anni
          </a>
        </h1>
        <ul>
          <li>
            <a href="projects.html">My Projects</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
