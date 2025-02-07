import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { useState } from "react";
import { Button } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "./firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const auth = getAuth();

  const handleLogin = () => {
    console.log("login called");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result", result);
        setUser({
          name: result?.user?.displayName,
          photo: result?.user?.photoURL,
          userId: result?.user?.uid,
        });

        setIsLoggedIn(true);
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            background: "black",
            color: "white",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              background: "white",
              padding: "10px",
              fontSize: "20px",
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      ) : (
        <div>
          {/* Navbar  */}
          <Navbar user={user} />

          <Routes>
            {/* / -> Home  */}
            <Route path="/" element={<Home />} />

            {/* /profile -> Profile  */}
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
