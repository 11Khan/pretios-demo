import React from "react";

import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home from "./pages/home/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vision from "./pages/vision/page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </Router>
  );
}

export default App;
