import React from 'react';
import "./Login.scss";
import { useState } from "react";


const Login = () => {
  
  return (
    <div className="login-container">
    <p>LOGIN</p>
      <form>
        <label>
        <span>USERNAME</span>
        <input type="text" name="username"></input>
        </label>
        <label>
          <span>PASSWORD</span>
          <input type="password" name="password"></input>
        </label>
        <button type="submit" className="submit-btn">ACCEDER</button>
      </form>
    </div>
  )
}

export default Login