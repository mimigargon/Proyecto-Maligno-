import React from 'react';
import "./Login.scss";

const Login = () => {
  return (
    <div>
    <h1>LOGIN</h1>
      <form>
        <label>
        <span>USERNAME</span>
        <input type="text" name="username"></input>
        </label>
        <label>
          <span>PASSWORD</span>
          <input type="text" name="password"></input>
        </label>
        <button type="submit">ACCEDER</button>
      </form>
    </div>
  )
}

export default Login