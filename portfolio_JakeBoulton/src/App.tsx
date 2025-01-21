import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Beatbox from "./pages/projects/BeatBox";
import Habibi from "./pages/projects/Habibi";
import Altilium from "./pages/projects/Altilium";
import NotFoundPage from "./pages/404";



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/BeatBox" element={<Beatbox />} />
        <Route path="/Habibi" element={<Habibi />} />
        <Route path="/Altilium" element={<Altilium />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
