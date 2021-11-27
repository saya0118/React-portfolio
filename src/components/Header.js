import logo from '../logo.svg';
import '../App.css';
import React from 'react';

function Header() {
    return (
      <div className="Header">
        <div className="nav-bar">
          <div className="nav-left">
            <p>Sayaka Matsuda</p>
          </div>
          <div className="nav-right">
            <ul>
              <li><a>HOME</a></li>
              <li><a>ABOUT</a></li>
              <li><a>WORKS</a></li>
              <li><a>SKILLS</a></li>
              <li><a>CONTACT</a></li>
            </ul>
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="Greeting">Hi there, I'm Saya!<br/>React Developer based in Vancouver</p>
        </header>
      </div>
    );
  }
  
  export default Header;
