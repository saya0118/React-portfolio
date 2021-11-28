import logo from '../image/logo.svg';
import React from 'react';

function Header() {
    return (
      <div className="Header">
        <div className="nav-bar">
            <ul>
              <li className="nav-left"><a>Sayaka Matsuda</a></li>
              <li><a>HOME</a></li>
              <li><a>ABOUT</a></li>
              <li><a>WORKS</a></li>
              <li><a>SKILLS</a></li>
              <li><a>CONTACT</a></li>
            </ul>
        </div>
        <div className="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="Greeting">Hi there, I'm Saya!<br/>React Developer based in Vancouver</p>
        </div>
      </div>
    );
  }
  
  export default Header;

