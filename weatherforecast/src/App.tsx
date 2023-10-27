import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./assets/pages/home/Home";
import Forecast from "./assets/pages/forecast/Forecast";
import Settings from "./assets/pages/settings/Settings";
import Login from "./assets/pages/login/Login";
import Register from "./assets/pages/register/Register";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/forecast' element={<Forecast />} />
              <Route path='/settings' element={<Settings />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;