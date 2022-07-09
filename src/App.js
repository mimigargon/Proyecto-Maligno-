
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Info from "./Components/Info/Info";
import Login from "./Components/Login/Login";
import "./App.scss";
// import Weapons from "./Components/Game-components/Weapons/Weapons";
import StolenGoods from "./Components/Game-components/Stolen-goods/Stolen-goods";
import Cryptos from "./Components/Game-components/Cryptos/Cryptos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/game-info" element={<Info />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/stolen" element={<StolenGoods/>}/>
        {/* <Route path='/weapons' element={<Weapons/>}/> */}
        <Route path='/cryptos' element={<Cryptos/>}/>

      </Routes>
    </>
  );
}

export default App;
