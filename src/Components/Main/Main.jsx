import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.scss";

const Main = () => {
  return (
    <div className="wrapper crt">
  <div className="quote ui-box">
        <p>In 2077 they voted Night City the worst place to live in America. Main issues: sky high rate of violence, and more people living below the poverty line than anywhere else.</p>
        <p>Can't deny it, it's all true.  But everybody still wants to live here.  This city's always got a promise for you.  Might be a lie, an illusion.  But it's there.  Just around the corner.  And it keeps you going.</p>
        <p>It's a city of dreams, and I'm a big dreamer.</p>
        <p> - V</p>
  </div>
  <div className="chat ui-box">
    <input type="text"></input>
  </div>
  <div className="cube ui-box">
  <Link to="/main">Main</Link>
  </div>
</div>
  )
}

export default Main;