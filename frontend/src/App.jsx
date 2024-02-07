import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Details from "./pages/Details";
import AddNewBoot from "./pages/addNewBoot";
import AddReservierung from "./pages/AddReservierung";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/details/:bootId" element={<Details />} />
          <Route path="/add-new-boot" element={<AddNewBoot />} />
        <Route path="/new-reservation" element={<AddReservierung />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
