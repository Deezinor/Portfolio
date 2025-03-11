import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Main Pages
const Home = lazy(() => {
  return import("./pages/Home");
});
const About = lazy(() => {
  return import("./pages/About");
});
const Contact = lazy(() => {
  return import("./pages/contact");
});

// XR Pages
const Beatbox = lazy(() => {
  return import("./pages/projects/XR/BeatBox");
});
const Habibi = lazy(() => {
  return import("./pages/projects/XR/Habibi");
});
const Altilium = lazy(() => {
  return import("./pages/projects/XR/Altilium");
});
const Midnight_at_the_Pagoda = lazy(() => {
  return import("./pages/projects/XR/Midnight_at_the_Pagoda");
});
const GoFish = lazy(() => {
  return import("./pages/projects/XR/GoFish");
});

// Archviz Pages
const CaspianHouse = lazy(() => {
  return import("./pages/projects/Archviz/CaspianHouse");
});
const Mon58 = lazy(() => {
  return import("./pages/projects/Archviz/Mon58");
});
// const ExteriorMasterclass = lazy(() => {
//   return import("./pages/projects/ExteriorMasterclass
// });

// Other Pages
const NotFoundPage = lazy(() => {
  return import("./pages/404");
});
const CV = lazy(() => {
  return import("./pages/CV");
});

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Main Projects */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* XR Projects */}
          <Route path="/BeatBox" element={<Beatbox />} />
          <Route
            path="/Midnight_at_the_Pagoda"
            element={<Midnight_at_the_Pagoda />}
          />
          <Route path="/Habibi" element={<Habibi />} />
          <Route path="/Altilium" element={<Altilium />} />
          <Route path="/GoFish" element={<GoFish />} />

          {/* Archviz Projects */}
          <Route path="/CaspianHouse" element={<CaspianHouse />} />
          <Route path="/Mon58" element={<Mon58 />} />
          {/* <Route path="/CaspianHouse" element={<ExteriorMasterclass />} /> */}

          {/* Other */}
          <Route path="/CV" element={<CV />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
