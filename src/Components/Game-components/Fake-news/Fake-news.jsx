import React from 'react'
import "./Fake-news.scss";
//import Notepad from '../Notepad/Notepad';

//He cogido como inspiración para este componente de Fake-News un pen de codepen
//https://codepen.io/fizzypop109/pen/Kjbbjq
//He descargado también un paquete de iconos de escritorio de windows 95
//de la siguiente página https://wallpapers-clan.com/app-icons/windows-95/
//en el que simula la pantalla de un ordenador con el sistema operativo de Windows 95
//En este componente has de seleccionar la noticia que sea verdadera entre todas las que hay

const FakeNews = () => {
  function updateTime(){

//Esta función actualiza en tiempo real la hora local con la plantilla del ordenador
    var today = new Date();
    var hours24 = today.getHours();
    var hours12;
    var minutes = today.getMinutes();
    var suffix = '';
  
    if (hours24 >= 12) {
      suffix = " PM";
      hours12 = hours24 % 12;
    } else {
      suffix = " AM";
      hours12 = hours24;
    }
    
    if (minutes % 10 === 0) {
      //minutes = minutes + "0";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    var time = hours12 + ":" + minutes + suffix;
  
    var timeBox = document.querySelector(".start__time-text");
  
    timeBox.innerHTML = time;
  }
  
  setInterval(updateTime, 1000);
  
  
  // Para poder arrastrar los objetos
  
  var desktopIcons = document.getElementsByClassName("desktop-icon");
  
  for (let i = 0; i < desktopIcons.length; i++) {
    dragElement(desktopIcons[i]);
  }
  
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();

      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;

      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // para calcular la nueva posición del cursor
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      
      // para setear la nueva posición 
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  
    return (
    <>
    <div className="container-fakeNews">
    <div className="monitor">
    <div className="start">
      <div className="start__button">
        <div className="start__logo">
        </div>
        <p className="start__text">
          Start
        </p>
      </div>
      <div className="start__time">
        <p className="start__time-text">
        </p>
      </div>
    </div>
    <div className="start__menu-main">
       <div className="start__menu-main-side">
         <div className="start__menu-main-side-text text">
           <p className="ninefive">95</p>
           <p className="windows">Windows</p>
         </div>
       </div>
       <div className="start__menu-main-items">
         <ul className="start__menu-main-items-list1">
           <li className="start__menu-main-items-item programs">
             <img className="programs-img icon" src="https://i.ya-webdesign.com/images/windows-95-icons-png-7.png" alt="Programs"/>
             <p className="start__menu-main-items-item-title programs"><span className="underline">P</span>rograms</p>
             <div className="start__menu-main-items-item-arrowright"></div>
             <ul className="start__menu-sub sub__programs">
               <li className="start__menu-sub-items-item sub__programs-items">
                 <img className="accessories-img icon" src="https://i.ya-webdesign.com/images/windows-95-icons-png-7.png" alt="Accessories"/>
                 <p className="start__menu-sub-items-item-title accessories">Accessories</p>
                 <div className="start__menu-main-items-item-arrowright"></div>
               </li>
               
               <li className="start__menu-sub-items-item sub__programs-items">
                 <img className="startup-img icon" src="https://i.ya-webdesign.com/images/windows-95-icons-png-7.png" alt="StartUp"/>
                 <p className="start__menu-sub-items-item-title startup">StartUp</p>
                 <div className="start__menu-main-items-item-arrowright"></div>
               </li>
               
               <li className="start__menu-sub-items-item sub__programs-items">
                 <img className="dos-img icon" src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Msdos-icon.png" alt="DOS"/>
                 <p className="start__menu-sub-items-item-title dos">MS-DOS Prompt</p>
                 <div className="start__menu-main-items-item-arrowright"></div>
               </li>
             </ul>
           </li>
           <li className="start__menu-main-items-item documents">
             <img className="documents-img icon" src="https://i.ya-webdesign.com/images/windows-95-icons-png-6.png" alt="Documents"/>
             <p className="start__menu-main-items-item-title documents"><span className="underline">D</span>ocuments</p>
             <div className="start__menu-main-items-item-arrowright"></div>
             
           </li>
           <li className="start__menu-main-items-item settings">
             <div className="settings-img icon bg-img"></div>
             <p className="start__menu-main-items-item-title settings"><span className="underline">S</span>ettings</p>
             <div className="start__menu-main-items-item-arrowright"></div>
           </li>
      
           <li className="start__menu-main-items-item find">
             <div className="find-img icon bg-img"></div>
             <p className="start__menu-main-items-item-title find"><span className="underline">F</span>ind</p>
             <div className="start__menu-main-items-item-arrowright"></div>
           </li>
    
           <li className="start__menu-main-items-item help">
             <img className="help-img icon" src="https://expensive.toys/img/about-icon.png" alt="Help"/>
             <p className="start__menu-main-items-item-title help"><span className="underline">H</span>elp</p>
           </li>
    
           <li className="start__menu-main-items-item run">
             <div className="run-img icon bg-img"></div>
             <p className="start__menu-main-items-item-title run"><span className="underline">R</span>un...</p>
           </li>

         </ul>

         <ul className="start__menu-main-items-list2">
           <li className="start__menu-main-items-item shutdown">
             <div className="shutdown-img icon bg-img"></div>
             <p className="start__menu-main-items-item-title shutdown">Sh<span className="underline">u</span>t Down...</p>
           </li>
         </ul>
       </div>
    </div>

    <div className="fakepc desktop-icon">
      <div className="fakepc__icon desktop-icon__icon">
      </div>
      <p className="fakepc__text desktop-icon__text">My Computer</p>
    </div>

<div className="recycle desktop-icon">
      <div className="recycle__icon desktop-icon__icon">
      </div>
      <p className="recycle__text desktop-icon__text">Recycle Bin</p>
    </div>


<div className="instagram desktop-icon">
      <div className="instagram__icon desktop-icon__icon">
      </div>
      <p className="instagram__text desktop-icon__text">Instagram</p>
    </div>

<div className="prime desktop-icon">
      <div className="prime__icon desktop-icon__icon">
      </div>
      <p className="prime__text desktop-icon__text">Prime Video</p>
    </div>

<div className="music desktop-icon">
      <div className="music__icon desktop-icon__icon">
      </div>
      <p className="music__text desktop-icon__text">Apple Music</p>
    </div>

<div className="messenger desktop-icon">
      <div className="messenger__icon desktop-icon__icon">
      </div>
      <p className="messenger__text desktop-icon__text">Messenger</p>
    </div>

<div className="explorer desktop-icon">
      <div className="explorer__icon desktop-icon__icon">
      </div>
      <p className="explorer__text desktop-icon__text">Explorer</p>
    </div>

<div className="notes desktop-icon">
      <div className="notes__icon desktop-icon__icon">
      </div>
      <p className="notes__text desktop-icon__text">Notes</p>
    </div>

<div className="discord desktop-icon">
      <div className="discord__icon desktop-icon__icon">
      </div>
      <p className="discord__text desktop-icon__text">Discord</p>
    </div>

<div className="twitch desktop-icon">
      <div className="twitch__icon desktop-icon__icon">
      </div>
      <p className="twitch__text desktop-icon__text">Twitch</p>
    </div>

<div className="google desktop-icon">
      <div className="google__icon desktop-icon__icon">
      </div>
      <p className="google__text desktop-icon__text">Google</p>
    </div>

<div className="google desktop-icon">
      <div className="google__icon desktop-icon__icon">
      </div>
      <p className="google__text desktop-icon__text">Google</p>
    </div>

<div className="facebook desktop-icon">
      <div className="facebook__icon desktop-icon__icon">
      </div>
      <p className="facebook__text desktop-icon__text">Facebook</p>
    </div>

<div className="linkedin desktop-icon">
      <div className="linkedin__icon desktop-icon__icon">
      </div>
      <p className="linkedin__text desktop-icon__text">LinkedIn</p>
    </div>

<div className="tinder desktop-icon">
      <div className="tinder__icon desktop-icon__icon">
      </div>
      <p className="tinder__text desktop-icon__text">Tinder</p>
    </div>

<div className="chrome desktop-icon">
      <div className="chrome__icon desktop-icon__icon">
      </div>
      <p className="chrome__text desktop-icon__text">Chrome</p>
    </div>

<div className="spotify desktop-icon">
      <div className="spotify__icon desktop-icon__icon">
      </div>
      <p className="spotify__text desktop-icon__text">Spotify</p>
    </div>

<div className="twitter desktop-icon">
      <div className="twitter__icon desktop-icon__icon">
      </div>
      <p className="twitter__text desktop-icon__text">Twitter</p>
    </div>

<div className="weather desktop-icon">
      <div className="weather__icon desktop-icon__icon">
      </div>
      <p className="weather__text desktop-icon__text">Weather</p>
    </div>

<div className="snapchat desktop-icon">
      <div className="snapchat__icon desktop-icon__icon">
      </div>
      <p className="snapchat__text desktop-icon__text">Snapchat</p>
    </div>

<div className="incognito desktop-icon">
      <div className="incognito__icon desktop-icon__icon">
      </div>
      <p className="incognito__text desktop-icon__text">Incognito</p>
    </div>

<div className="youtube desktop-icon">
      <div className="youtube__icon desktop-icon__icon">
      </div>
      <p className="youtube__text desktop-icon__text">YouTube</p>
    </div>

{/*   <Notepad/> */}

  </div>
  </div>
    </>
  )
}

export default FakeNews;