import React from 'react';
import SkyLight from 'react-skylight';
import logo from '../images/logo.png';
import '../styles/nav.scss';
import Login from './login';
import SignUp from './sign-up';

class Nav extends React.Component {
  constructor(props){
    super(props);
  }
  
  currentUser(){
    const token = localStorage.getItem("token");
    console.log(token);
    if(token) return window.location = "/list-your-car";
    else return window.alert("You must login or sign up first.");
  }

  render() {

    return (
      <div className="nav">
        <div className="logo"><a href="/"><img src={logo} alt=""/></a></div>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
          <SignUp/>
        </SkyLight>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog2 = ref}>
          <Login/>
        </SkyLight>
        <div className="nav-links">
            <a className="become-a-host" href="" onClick={this.currentUser}>Become a host</a>
            <button href="" onClick={() => this.simpleDialog2.show()}>Log in</button>
            <button href="" onClick={() => this.simpleDialog.show()}>Sign up</button>
        </div>

      </div>
    )
  }
}

Nav.displayName = 'Nav';

export default Nav;