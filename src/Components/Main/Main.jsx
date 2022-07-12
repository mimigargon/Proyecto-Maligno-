import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";
import Bloc from "../Bloc/Bloc";

const Main = () => {
  return (
    <div className="main-container">
      <Link to={"/login"}>
        <button className="main-btn">LOGIN</button>
      </Link>
      <span>SEARCH</span>
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
      <div className="main-notebook"><Bloc/></div>
    </div>
</div>
    //flex-direction row para un contenedor de main-links y main-notebook
  );
};

export default Main;
