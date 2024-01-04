import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./component/Welcome";
import Login from "./component/Login";

import Navbar from "./component/Navbar";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/welcome"  element={<Welcome />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
