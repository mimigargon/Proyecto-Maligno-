import { Routes, Route } from "react-router-dom";
/*import Home from "./Components/Home/Home"; */
import Main from "./Components/Main/Main";
/* import Info from "./Components/Info/Info";
import Login from "./Components/Login/Login"; */
import "./App.scss";

function App() {
  return (
    <div>
    <Routes>
     <Route path="/main" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
