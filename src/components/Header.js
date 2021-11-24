import logo from '../logo.svg';
import '../App.css';
import React from 'react';

function Header() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="Greeting">Hi there, I'm Saya!<br/>React Developer based in Vancouver</p>
        </header>
      </div>
    );
  }
  
  export default Header;

