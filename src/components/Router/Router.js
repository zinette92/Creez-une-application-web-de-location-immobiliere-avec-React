import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Error from "../../pages/Error/Error";
import Housinginformation from "../Housinginformation/Housinginformation";
import Data from "../../Data/logements.json";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:houseId" element={<Housinginformation data = { Data }/>} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
