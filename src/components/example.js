import React from 'react';
import SkyLight from 'react-skylight';
import logo from '../assets/logo.png';
import '../styles/nav.scss';
import Login from './login';
import SignUp from './sign-up';

class Example extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="nav">
        <div className="logo"><img src={logo} alt=""/></div>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
          <SignUp/>
        </SkyLight>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog2 = ref}>
          <Login/>
        </SkyLight>
        <div className="nav-links">
            <a className="become-a-host" href="">Become a host</a>
            <button href="" onClick={() => this.simpleDialog2.show()}>Log in</button>
            <button href="" onClick={() => this.simpleDialog.show()}>Sign up</button>
        </div>

      </div>
    )
  }
}

Example.displayName = 'Example';

export default Example;