import React from 'react';
import './Headers.css';
import { Link } from 'react-router-dom';

function Headers() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><Link to={"/"}>MockApi</Link></li>
          <li><Link to={'/mockApi'}>Api</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;