import React from "react";
import "./Notepad.scss";
import Swal from "sweetalert2";

const Notepad = () => {
	const showAlertError1 = () => {
		Swal.fire({
			icon: 'error',
			title: '¡Nop!',
			text: 'Por mucho que cueste creerlo, la tierra es... ¡redonda! Sigue intentándolo',
		})
	  }

	const showAlertError2 = () => {
		Swal.fire({
			icon: 'error',
			title: '¡Hasta luego, cocodrilo!',
			text: 'Si piensas que compartimos el planeta con hombres-lagarto, has fallado.',
		})
	  }

	const showAlertSuccess = () => {
		Swal.fire(
			'¡Encontraste parte de la contraseña!',
			'Y pensar que dentro de poco podrás atraparme con la mente...',
			'success'
		  )
	  }
	
	return (
    <>
      <div className="notepadContainer">
        <div className="notepad">
          <div className="notepad-bar">
            <div className="notepad-icon">
              <img
                src="https://www.pngkey.com/png/full/142-1426797_download-count-windows-95-icon-png.png"
                alt="notepad icon"
              />
            </div>
            <div className="notepad-title">Programs - Notepad</div>
            <div className="notepad-exit">
              <div className="button-exit">&#10060;</div>
            </div>
            <div className="notepad-maximize">
              <div className="button-maximize">
                <div className="icon-maximize"></div>
              </div>
            </div>
            <div className="notepad-minimize">
              <div className="button-minimize">
                <div className="icon-minimize"></div>
              </div>
            </div>
          </div>
          <div className="notepad-settings">
            <div className="settings-text">
              <span className="underline">F</span>ile
            </div>
            <div className="settings-text">
              <span className="underline">E</span>dit
            </div>
            <div className="settings-text">
              <span className="underline">S</span>earch
            </div>
            <div className="settings-text">
              <span className="underline">H</span>elp
            </div>
          </div>
          <div className="notepad-content">
            <h2>Fake News - ¿Cuál de estas noticias es la verdadera?</h2>
			<div className="theories">
            <div className="flatEarth">
              <h3>La Tierra es plana y la NASA nos lo niega</h3>
              <p>
                No contenta con inventarse la llegada del hombre a la luna, la
                NASA también estaría detrás de la idea de que la Tierra es
                redonda. 
              </p>
			  <button className="selectBtn" onClick={() => showAlertError1()}>Seleccionar</button>
            </div>
            <div className="illuminati">
              <h3>Estamos gobernados por reptilianos</h3>
              <p>
			  Se dice que provienen de un sistema estelar llamado Alfa Draconis y que en la actualidad habitan en una gran red de cuevas subterráneas.
			  La gente se refiere a ellos para hablar de seres que controlan la política, la sociedad y la mente humana como tal por medio de su infiltración entre nosotros con el único objetivo de subyugarnos y esclavizar ser humano.
              </p>
			  <button className="selectBtn" onClick={() => showAlertError2()}>Seleccionar</button>
            </div>
            <div className="neuralink">
              <h3>Neuralink empezará a implantar chips cerebrales en humanos en 2022</h3>
              <p>
			  El chip permitirá a las personas comunicarse con dispositivos electrónicos a través del pensamiento. los primeros en recibirlos serán personas tetrapléjicas o con graves lesiones en la médula espinal, que gracias al chip estarán en condiciones de comunicarse con todo tipo de dispositivos electrónicos utilizando solo el pensamiento.
              </p>
			  <button className="selectBtn" onClick={() => showAlertSuccess()}>Seleccionar</button>
            </div>
			</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notepad;
