import React from "react";
import { Link } from "react-router-dom";
import useTimeout from "../../useTimeOut";

function Info() {
   
  return (
    <div className="info-container">
      <p>Lorem ipsum....</p>
      
        <Link to={"/main"}>
      {useTimeout(() => {
        const button = document.createElement('button'); 
        button.type = 'button'; 
        button.innerText = 'CONTINUE TO GAME';
        button.classList.add('info-btn');
        document.body.appendChild(button); 
       
    }, 5000)}
        </Link>
      
      
      {console.log("setTimeout() Ejemplo...")}
    </div>
  );
}

export default Info;
