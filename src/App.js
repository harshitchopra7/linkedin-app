import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar  */}
        <Navbar />

        <Routes>
          {/* / -> Home  */}
          <Route path="/" element={<Home />} />

          {/* /profile -> Profile  */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
