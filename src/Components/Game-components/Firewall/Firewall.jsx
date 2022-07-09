import React from 'react'
import "./Firewall.scss"

function Firewall() {
  return (
    <>

  <div className="instructions">
    <h1>¿Alguna vez has tenido que conseguir evadir un firewall?</h1>
    <p>En esta prueba vas a tener que demostrar tu capacidad de burlar sistemas de seguridad como un firewall.</p>
    <p>para completar la prueba tendrás que poner el cursor en el pie de página donde pone <b>INICIO.</b></p>
    <p>Una vez ahí solo tendrás que moverte por el muro tratando de que tu cursor no choque con el muro, en caso de que choque, se reiniciará la prueba. Buena suerte.</p>
  </div>

    
    <div id="game"> 
    <div className="wall-left"></div>
    <div className="wall-right"></div>
    <div id="gameover"><h1>You lose</h1></div>
    <div id="win"><h1>Congratulations !<br/>You win</h1></div>
    
  </div>
    <p className="start"><b>INICIO</b></p>

    </>
  )
}

export default Firewall