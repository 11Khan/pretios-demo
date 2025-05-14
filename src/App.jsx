import React from "react";

import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home from "./pages/home/page";
import Vision from "./pages/vision/page";
import Building from "./pages/building/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/building" element={<Building />} />
      </Routes>
    </Router>
  );
}

export default App;
