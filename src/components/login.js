import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/login.scss';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  function updateLoginData(value) {
    return setLoginData((prev) => {
      return { ...prev, ...value };
    });
  }
  async function onSubmit(e) {
    e.preventDefault();
 
    const loginCredential = { ...loginData };

    axios.post('/login', loginCredential).then(async (res) =>{
      localStorage.setItem("token", JSON.stringify(res.data.user));
      if(!res.data.user) return console.log("Invalid credentials!");
        //navigate("../user", { replace: true });
        window.location.reload();
    }).catch((err) => {
      console.log(err.message);
    })
    setLoginData({ email: "", password: ""});
    
  }
  return (
    <div className="login-wrapper">
        <p>Welcome back</p>
        <form action="" className="login-form" onSubmit={onSubmit} method="POST">
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Email" name="email" value={loginData.email} onChange={(e) => updateLoginData({ email: e.target.value })}/>
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" name="password" value={loginData.password} onChange={(e) => updateLoginData({ password: e.target.value })}/>
            </div>
            <input className="submit" type="submit" value="Log in"/>
        </form>
    </div>
  )
}

export default Login;