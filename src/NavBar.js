import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Server Dashboard</a>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
          <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
          <li className="navbar-item"><a href="/contact" className="navbar-link">Socials</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
