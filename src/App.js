/* import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home"; */
import Main from "./Components/Main/Main";
/* import Info from "./Components/Info/Info";
import Login from "./Components/Login/Login"; */
import "./App.scss";
import Drugs from "./Components/Game-components/Drugs/Drugs";
import Firewall from './Components/Game-components/Firewall/Firewall'

function App() {
  return (
    <div>
      <Main/>
      <Drugs/>
      <Firewall/>      

    </div>
  );
}

export default App;
