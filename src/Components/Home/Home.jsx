import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>MALGINO RETURNS</h1>
      <div className="buttons-container">
        <Link to={"/game-info"}><button className='start-btn'>START</button></Link>
        <Link to={"/login"}><button className='login-btn'>LOGIN</button></Link>
      </div>
    </>
  )
}

export default Home