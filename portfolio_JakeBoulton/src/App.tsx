import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => {
  return import("./pages/Home");
});
const About = lazy(() => {
  return import("./pages/About");
});
const Contact = lazy(() => {
  return import("./pages/contact");
});
const Beatbox = lazy(() => {
  return import("./pages/projects/BeatBox");
});
const Habibi = lazy(() => {
  return import("./pages/projects/Habibi");
});
const Altilium = lazy(() => {
  return import("./pages/projects/Altilium");
});
const Midnight_at_the_Pagoda = lazy(() => {
  return import("./pages/projects/Midnight_at_the_Pagoda");
});
const GoFish = lazy(() => {
  return import("./pages/projects/GoFish");
});
const NotFoundPage = lazy(() => {
  return import("./pages/404");
});

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/BeatBox" element={<Beatbox />} />
          <Route
            path="/Midnight_at_the_Pagoda"
            element={<Midnight_at_the_Pagoda />}
          />
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
