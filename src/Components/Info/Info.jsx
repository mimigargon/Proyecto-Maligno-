import React from "react";
import { Link } from "react-router-dom";
import useTimeout from "../../useTimeOut";

function Info() {
   
  return (
    <div className="info-container">
      <p>Lorem ipsum....</p>
      
      {useTimeout(() => {
        <Link to={"/main"}>
        <button className="info-btn" value="CONTINUE TO GAME"/>
        </Link>
    }, 5000)}
      
      
      {console.log("setTimeout() Ejemplo...")}
    </div>
  );
}

export default Info;
