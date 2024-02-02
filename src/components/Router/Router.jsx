import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Error from "../../pages/Error/Error";
import Layout from "../Layout/Layout";
import Housinginformation from "../Housinginformation/Housinginformation";

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="housing/:houseId" element={<Housinginformation />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  );
}
