import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./component/Welcome";
import Login from "./component/Login";

import Navbar from "./component/Navbar";
import Forgetpassword from "./component/Forgetpassword";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/welcome"  element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
