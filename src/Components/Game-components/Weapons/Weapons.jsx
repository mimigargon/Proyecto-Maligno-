import React from 'react';
import "./Weapons.scss";
import disk from "../../../images/harddisk.png";
import Magnifier from "react-magnifier";
import Swal from 'sweetalert2';
/* import computer from "../../../images/computer.gif"; */


//Este componente de armas consiste en una habitación como si fuera de una armería
//en la que tienes que encontrar la pista con una linterna y la luz apagada.
//He implementado la librería Magnifier de React para la lupa que hace zoom-in en la pista
//una vez la has encontrado, además de un pen del usuario mahou123 de codepen que simula una linterna
//el pen es el siguiente: https://codepen.io/mahou123/pen/dyyBgGJ
//He intentado implementar también un alert que aparezca cuando intentas abandonar la página
/* window.onbeforeunload = function() {
  var message = 'Do you want to leave this page?';
  return message;
} */


const Weapons = () => {
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const light = document.querySelector('.light');
    light.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, #000 15%)`;
  });

  const showAlert=()=>{
    Swal.fire({
      title: '¡Conseguido! has encontrado parte de la contraseña',
      color: '#ffffff',
      background: 'url("https://c.tenor.com/-SV9TjUGabMAAAAC/hacker-python.gif") no-repeat',
    })
  }

  return (
    <div className='lightContainer'>
    <div className='light'>
    <div className='diskContainer'>
    <Magnifier onClick={()=>showAlert()} className='disk' src={disk} width={200}/>
    </div>
    </div>
    </div>
  )
}

export default Weapons