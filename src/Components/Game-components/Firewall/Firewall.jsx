import React from 'react'
import "./Firewall.scss"
import useTimeout from '../../../useTimeOut';



function Firewall() {
  return (
    <>

  <div className="instructions">
    <h1>¿Alguna vez has tenido que conseguir evadir un firewall?</h1>
    <p>En esta prueba vas a tener que demostrar tu capacidad de burlar sistemas de seguridad como un firewall.</p>
    <p>para completar la prueba tendrás que poner el cursor en el pie de página donde pone <b>INICIO.</b></p>
    <p>Una vez ahí solo tendrás que moverte por el muro tratando de que tu cursor no choque con el muro, en caso de que choque, se reiniciará la prueba. Buena suerte.</p>
  </div>
    {/* <div className="game"> 
    <div className="wall-left"></div>
    <div className="wall-right"></div>
    <div className="gameover"><h1>You lose</h1></div>
    <div className="win"><h1>Congratulations !<br/>You win</h1></div> 
    
  </div>*/}
    {useTimeout(() => {
      
      const game = document.createElement("div");
      game.classList.add("game");
      
      const wallLeft = document.createElement("div");
      wallLeft.classList.add("wall-left");

      const wallRight = document.createElement("div");
      wallRight.classList.add("wall-right");

      const gameover = document.createElement("div");
      gameover.classList.add("gameover");

      const win = document.createElement("div");
      win.classList.add("win");

      const root = document.getElementById("root");

      const p = document.createElement("p");
      p.classList.add("start")
      p.innerHTML= "INICIO";
 
     root.appendChild(game);
      game.appendChild(wallLeft);
      game.appendChild(wallRight);
      game.appendChild(gameover);
      game.appendChild(win);
      root.appendChild(p);
      
        }, 3000)}
    


    </>
  )
}

export default Firewall