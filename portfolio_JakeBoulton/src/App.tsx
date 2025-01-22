import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Beatbox = lazy(() => import("./pages/projects/BeatBox"));
const Habibi = lazy(() => import("./pages/projects/Habibi"));
const Altilium = lazy(() => import("./pages/projects/Altilium"));
const Midnight_at_the_Pagoda = lazy(() => import("./pages/projects/Midnight_at_the_Pagoda"));
const GoFish = lazy(() => import("./pages/projects/GoFish"));
const NotFoundPage = lazy(() => import("./pages/404"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/BeatBox" element={<Beatbox />} />
          <Route path="/Midnight_at_the_Pagoda" element={<Midnight_at_the_Pagoda />} />
          <Route path="/Habibi" element={<Habibi />} />
          <Route path="/Altilium" element={<Altilium />} />
          <Route path="/GoFish" element={<GoFish />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
