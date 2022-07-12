import React from 'react'

const Register = () => {
  return (
    <div className="register-container">
    <p>REGISTER</p>
      <form>
        <label>
        <span>USERNAME</span>
        <input type="text" name="username"></input>
        </label>
        <label>
        <span>EMAIL</span>
        <input type="email" name="email"></input>
        </label>
        <label>
          <span>PASSWORD</span>
          <input type="password" name="password"></input>
        </label>
        <button type="submit" className="submit-btn">REGÍSTRATE</button>
      </form>
    </div>
  )
}

export default Register