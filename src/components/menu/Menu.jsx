import "./menu.scss";
import React from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">
            <div className="menu-item">Home</div>
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">
            <div className="menu-item">About Me</div>
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">
            <div className="menu-item">My Works</div>
          </a>
        </li>
      </ul>
    </div>
  );
}
