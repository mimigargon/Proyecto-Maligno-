import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";
import { useSelector } from "react-redux";

const Main = () => {
  const passObj = useSelector(state => state.password.passObj);
  return (
    <div className="main-container">
      <Link to={"/login"}>
        <button className="main-btn">LOGIN</button>
      </Link>
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
    <div className="blocnotas">
  <div className="top">
 
  </div>
  <div className="paper" contenteditable="true">
  <p>Aquí se guardará la contraseña a medida que vayas desencriptando las pistas en cada página web.</p>
  <span>Password: </span>
  {passObj.weapon && <span><b>{passObj.weapon}</b></span>}
  {passObj.drug && <span><b>{passObj.drug}</b></span>}
  {passObj.stolengoods && <span><b>{passObj.stolengoods}</b></span>}
  {passObj.firewall && <span><b>{passObj.firewall}</b></span>}
  {passObj.crypto && <span><b>{passObj.crypto}</b></span>}
  {passObj.fakenews && <span><b>{passObj.fakenews}</b></span>}
  </div>
</div>
    </div>
      </div>
    </div>
</div>
    //flex-direction row para un contenedor de main-links y main-notebook
  );
};

export default Main;
