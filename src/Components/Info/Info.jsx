import React from "react";
import useTimeout from "../../useTimeOut";
import "./Info.scss";

function Info() {
  return (
    <div className="info-container">
      <p>
        Una serie de delitos se han cometido dentro de la Deep Web. El autor es
        un famoso hacker conocido como 4RCH4N63L.
      </p>
      <p>
        Estos delitos no han podido ser rastreados por el Servicio de
        Inteligencia debido a la alta encriptación de los datos.
      </p>
      <p>Por ello han sido solicitados tus servicios como hacker.</p>
      <p>
        Tu misión es conseguir descubrir cuales son los delitos cometidos y
        desencriptar los datos para obtener las credenciales de 4RCH4N63L. 
      </p>
      <p>Debes acabar con su reinado de terror de una vez por todas.</p>
      <p>No puedes fallar.</p>
      <p> Buena suerte.</p>

      {useTimeout(() => {
        const link = document.createElement("a");
        link.textContent = "CONTINUE TO GAME";
        link.classList.add("info-btn");
        link.href = "/main";
        document.body.appendChild(link);
      }, 5000)}
    </div>
  );
}

export default Info;
