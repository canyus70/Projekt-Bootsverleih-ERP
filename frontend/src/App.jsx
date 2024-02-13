import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Details from "./pages/Details";
import AddNewBoot from "./pages/AddNewBoot";
import AddReservierung from "./pages/AddReservierung";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Login from "./pages/Login";

function App() {
  const [authorization, setAuthorization] = useState(null);
  const [userProfileInfo, setUserProfileInfo] = useState(null);
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home  authorization={authorization} userProfileInfo={userProfileInfo}/>} />
          <Route path="/gallery" element={<Gallery authorization={authorization} userProfileInfo={userProfileInfo}/>} />
          <Route path="/details/:bootId" element={<Details authorization={authorization} userProfileInfo={userProfileInfo}/>} />
          <Route path="/add-new-boot" element={<AddNewBoot authorization={authorization} userProfileInfo={userProfileInfo}/>} />
          <Route path="/new-reservation" element={<AddReservierung />} />
          <Route path="/login" element={<Login onLoginSuccess={(authorization, userProfileInfo) => {setAuthorization(authorization); setUserProfileInfo(userProfileInfo);}} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
