import React from "react";
import useTimeout from "../../useTimeOut";
import "./Info.scss";

function Info() {
  return (
    <>
      
      <section>
        <div className="container">
          <div className="box">
            <div className="p">El contenido de este juego es una simulación.</div>
            <div className="p">
              El objetivo es meramente educativo y de entretenimiento. En ningún
              caso se ha utilizado contenido real o con fines lucrativos.
            </div>
            <div className="p">Este juego está recomendado para mayores de edad.</div>
          </div>
          <div>
            <div>
              <div className="title">¡ATENCIÓN!</div>
            </div>
          </div>
        </div>
      </section>



        <div className="text-container">
          <p className="c1">
            Una serie de delitos se han cometido dentro de la Deep Web. El autor
            es un famoso hacker conocido como 4RCH4N63L.
          </p>
          <p className="c2">
            Estos delitos no han podido ser rastreados por el Servicio de
            Inteligencia debido a la alta encriptación de los datos.
          </p>
          <p className="c3">
            Por ello han sido solicitados tus servicios como hacker.
          </p>
          <p className="c4">
            Tu misión es conseguir descubrir cuales son los delitos cometidos y
            desencriptar los datos para obtener las credenciales de 4RCH4N63L.
          </p>
          <p className="c5">
            Debes acabar con su reinado de terror de una vez por todas.
          </p>
          <p className="c6">No puedes fallar.</p>
          <p className="c7">Buena suerte.</p>
        </div>
        
      <div className="info-container">
        {useTimeout(() => {
          const link = document.createElement("a");
          link.textContent = "CONTINUE TO GAME";
          link.classList.add("info-btn");
          link.href = "/main";
          document.body.appendChild(link);
        }, 30000)}
      </div>
    </>
  );
}

export default Info;
