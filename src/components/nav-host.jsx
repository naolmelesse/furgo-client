import React, { useState } from 'react';
import '../styles/nav.scss';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from'@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';

const NavLoggedIn = () => {
  const [menuOpen, setMenuOpen] = useState();
  var handleChange = function(state) {
    setMenuOpen(state.isOpen);
    //return state.isOpen;
  };
  const closeMenu = () => {
    setMenuOpen(false);
  }

  function logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div className="nav nav-logged-in">
        <div className="logo"><a href="/"><img src={logo} alt=""/></a></div>
        <div className="nav-links">

            <button>Trips</button>

            <Menu isOpen={menuOpen} onStateChange={handleChange} className="side-menu" customBurgerIcon={ <button ><FontAwesomeIcon className="user-icon" icon={faUser} /></button> } right>
              <a className="menu-item" href="/">Home</a>
              <a className="menu-item" href="/profile">Profile</a>
              <a className="menu-item" href="/contact">Contact</a>
              <a className="menu-item--small" href="">Settings</a>
              <a href="" onClick={logout}>Logout</a>
              <button onClick={closeMenu}>Close X</button>
            </Menu>
            
            
        </div>
    </div>
  )
}

export default NavLoggedIn;