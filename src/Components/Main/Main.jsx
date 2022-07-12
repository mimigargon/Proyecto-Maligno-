import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";
import { useSelector } from "react-redux";

const Main = () => {
  const passObj = useSelector((state) => state.password.passObj);
  return (
    <div className="main-container">
        <div className="gameInfoContainer">
          <p className="c1">
          Acabas de acceder a la Dark Web como usuario, tu objetivo es conseguir las credenciales de <span>4RCH4N63L</span>
          </p>
          <p className="c2">
          para poder loguearte como administrador y, finalmente, borrar todo rastro que haya dejado por la red.
          </p>
          <p className="c3">
          Las siguientes rutas te llevarán a distintos rincones oscuros en los que tendrás que desencriptar las pistas
          </p>
          <p className="c4">
          para lograr estas contraseñas. Buena suerte.
          </p>
        </div>

      <div className="rowContainer">
        <div className="main-links">
          <Link to={"/stolen"}>
            <p>https://stolenobjects.com</p>
          </Link>
          <Link to={"/drugs"}>
            <p>https://buysomedrugs.com</p>
          </Link>
          <Link to={"/weapons"}>
            <p>https://warandweapons.com</p>
          </Link>
          <Link to={"/firewall"}>
            <p>https:/overpassthefirewall.com</p>
          </Link>
          <Link to={"/fake-news"}>
            <p>https://veryrealnews.com</p>
          </Link>
          <Link to={"/cryptos"}>
            <p>https://winwinsomecryptos.com</p>
          </Link>
        </div>
        <div className="main-notebook">
          <div className="blocContainer">
            <div class="blocnotas">
              <div class="top"></div>
              <div class="paper" contenteditable="true">
                <p>
                  Aquí se guardará la contraseña a medida que vayas
                  desencriptando las pistas en cada página web.
                </p>
                <span>Password: </span>
                {passObj.weapon && (
                  <span>
                    <b>{passObj.weapon}</b>
                  </span>
                )}
                {passObj.drug && (
                  <span>
                    <b>{passObj.drug}</b>
                  </span>
                )}
                {passObj.stolengoods && (
                  <span>
                    <b>{passObj.stolengoods}</b>
                  </span>
                )}
                {passObj.firewall && (
                  <span>
                    <b>{passObj.firewall}</b>
                  </span>
                )}
                {passObj.crypto && (
                  <span>
                    <b>{passObj.crypto}</b>
                  </span>
                )}
                {passObj.fakenews && (
                  <span>
                    <b>{passObj.fakenews}</b>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/login"}>
        <button className="main-btn">LOGIN</button>
      </Link>
    </div>
  );
};

export default Main;
