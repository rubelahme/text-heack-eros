import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from "./Components/Verify/Verify";
import Dashboard from "./Components/Dashboard/Dashboard";
import Email from "./Components/Dashboard/Email";
import IdVerify from "./Components/IdVerify/IdVerify";
import Verifycode from "./Components/Home/Verifycode";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/Verifycode" element={<Verifycode />} />
          <Route path="/rubel" element={<Dashboard />} />
          <Route path="/id" element={<Email />} />
          <Route path="/IdVerify" element={<IdVerify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
