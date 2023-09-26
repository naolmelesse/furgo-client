import React, { useState } from 'react';
import '../styles/nav.scss';
import logo from '../images/logo.png';
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

  function isHost(){
    const token = localStorage.getItem("token");
    const decodedValue = JSON.parse(atob(token.split('.')[1]));
    
    //console.log(token);
    if(decodedValue['host']) return <button>Rent History</button>;
    else return <div><a className="become-a-host" href="/list-your-car">Become a host</a> <button>Trips</button></div>;
  }

  return (
    <div className="nav nav-logged-in">
        <div className="logo"><a href="/"><img src={logo} alt=""/></a></div>
        <div className="nav-links">
            {isHost()}

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