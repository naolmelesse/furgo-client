import React, {useState} from 'react';
import '../styles/login.scss';
import axios from 'axios';

const SignUp = () => {

  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  function updateSignUpData(value) {
    return setSignUpData((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
  
    const newUser = { ...signUpData };
    await axios.post("http://localhost:8080/signup", newUser)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
    setSignUpData({ fullName: "", email: "", password: ""});
 

  }

  return (
    <div className="login-wrapper">
        <p>Sign up</p>
        <form action="" className="login-form" method="POST" onSubmit={onSubmit}>
            <div className="input-box">
              <label htmlFor="full-name">Full name</label>
              <input type="text" value={signUpData.fullName} placeholder="Full name" name="full-name" onChange={(e) => updateSignUpData({ fullName: e.target.value })}/>
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" value={signUpData.email} placeholder="Email" name="email" onChange={(e) => updateSignUpData({ email: e.target.value })}/>
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input type="password" value={signUpData.password} placeholder="Password" name="password" onChange={(e) => updateSignUpData({ password: e.target.value })}/>
            </div>
            <input className="submit" type="submit" value="Sign up" />
        </form>
    </div>
  )
}

export default SignUp;