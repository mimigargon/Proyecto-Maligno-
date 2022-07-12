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
      <h1>SEARCH</h1>
      <input type="text" className="main-input"></input>
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
  {passObj.weapon && <span>{passObj.weapon}</span>}
  {passObj.drug && <span>{passObj.drug}</span>}
  {passObj.stolengoods && <span>{passObj.stolengoods}</span>}
  {passObj.firewall && <span>{passObj.firewall}</span>}
  {passObj.crypto && <span>{passObj.crypto}</span>}
  {passObj.fakenews && <span>{passObj.fakenews}</span>}
  
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
