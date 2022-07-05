import React from 'react';
import "./Weapons.scss";
import disk from "../../../images/harddisk.png";
import Magnifier from "react-magnifier";




const Weapons = () => {
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const light = document.querySelector('.light');
    light.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, #000 15%)`;
  });
  window.onbeforeunload = function() {
    var message = 'Do you want to leave this page?';
    return message;
}
  return (
    <div className='light'>
    <div className='diskContainer'>
    <Magnifier className='disk' src={disk} width={200}/>
    </div>
    </div>
  )
}

export default Weapons