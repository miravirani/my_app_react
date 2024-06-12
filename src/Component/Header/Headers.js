import React from 'react';
import './Headers.css';
import { Link, NavLink } from 'react-router-dom';
import weetechLogo from '../../Assets/img/weetech-logo.png';

function Header() {
  return (
    <header className="header">
      <div className='logo'>
        <img className='weetechlogo' src={weetechLogo} alt="Weetech Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link className='text-color' to={"/Home"}>Home</Link></li>
          <li>Services</li>
          <li><Link className='text-color' to={"/Portfolio"}>Portfolio</Link></li>
          <li><Link className='text-color' to={"/Blog"}>Blog</Link></li>
          <li>Company</li>
          <li><Link className='text-color'to={"/Contact"}>Contact</Link></li>
          {/* <li><NavLink to={}></NavLink></li> */}
        </ul>
      </nav>
      <div className='searchMenu'>
        <ul>
          <li><Link className='text-color' to={"/Login"}>Login</Link></li>
          <li><Link className='text-color' to={"/SignUp"}>signup</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;