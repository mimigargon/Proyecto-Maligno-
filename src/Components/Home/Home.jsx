import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>MALGINO RETURNS</h1>
      <div className="buttons-container">
        <button className='start-btn' onClick={() => Navigate("/gameinfo")}>START</button>
        <button className='login-btn' onClick={() => Navigate("/login")}>LOGIN</button>
      </div>
    </>
  )
}

export default Home