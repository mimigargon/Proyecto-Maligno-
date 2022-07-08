import React from 'react'
import "./Fake-news.scss";

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
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      
      // set the element's new position:
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
    <div className="container">
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

    <div className="computer desktop-icon">
      <div className="computer__icon desktop-icon__icon">
      </div>
      <p className="computer__text desktop-icon__text">
        My Computer
      </p>
    </div>

<div className="recycle desktop-icon">
      <div className="recycle__icon desktop-icon__icon">
      </div>
      <p className="recycle__text desktop-icon__text">Recycle Bin</p>
    </div>
  </div>
  </div>
    </>
  )
}

export default FakeNews;