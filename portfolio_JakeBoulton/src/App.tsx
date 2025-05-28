import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Eager-loaded core pages (fast initial load)
import Home from "./pages/Home";
// import About from "./pages/About";
import Contact from "./pages/contact";
import Gallery from "./pages/ImageGallery";

// Lazy-loaded pages (only loaded when visited)
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
const CaspianHouse = lazy(() => {
  return import("./pages/projects/Archviz/CaspianHouse");
});
const Mon58 = lazy(() => {
  return import("./pages/projects/Archviz/Mon58");
});
const GS_Weapons = lazy(() => {
  return import("./pages/projects/3D Art/Goldsmiths_weapons");
});
const SavernakeKnife = lazy(() => {
  return import("./pages/projects/3D Art/Savernake");
});

const CV = lazy(() => {
  return import("./pages/CV");
});
const NotFoundPage = lazy(() => {
  return import("./pages/404");
});

const App: React.FC = () => {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      sessionStorage.removeItem("scrollPosition");
    } else {
      window.scrollTo(0, 0);
    }

    const saveScrollPosition = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      return window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Eager-loaded pages */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />

          {/* Lazy-Loaded Pages */}
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

          {/* 3D Art Project */}
          <Route path="/GS_Weapons" element={<GS_Weapons />} />
          <Route path="/SavernakeKnife" element={<SavernakeKnife />} />

          {/* Other */}
          <Route path="/CV" element={<CV />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
