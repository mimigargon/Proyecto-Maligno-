import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Info from "./Components/Info/Info";
import Login from "./Components/Login/Login";
import "./App.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameinfo" element={<Info />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
