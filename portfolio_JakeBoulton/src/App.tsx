import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Layout, ErrorBoundary } from "./components";

// Eager-loaded core pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import Process from "./pages/Process";
import About from "./pages/About";
import Contact from "./pages/contact";

// Lazy-loaded pages
const ProjectDetail = lazy(() => {
  return import("./pages/ProjectDetail");
});
const NotFound = lazy(() => {
  return import("./pages/NotFound");
});
const SystemProjectTemplate = lazy(() => {
  return import("./components/SystemProjectTemplate");
});

// Legacy routes (for backward compatibility - will redirect)
const LegacyProjectRoutes = lazy(() => {
  return import("./components/LegacyRedirect");
});

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Layout>
            <Routes>
{/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/unity-workflow-ai-system" element={<SystemProjectTemplate />} />
              <Route path="/work/:slug" element={<ProjectDetail />} />
              <Route path="/process" element={<Process />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Legacy Redirects */}
              <Route path="/projects" element={<Work />} />
              <Route path="/BeatBox" element={<LegacyProjectRoutes />} />
              <Route
                path="/Midnight_at_the_Pagoda"
                element={<LegacyProjectRoutes />}
              />
              <Route path="/Habibi" element={<LegacyProjectRoutes />} />
              <Route path="/Altilium" element={<LegacyProjectRoutes />} />
              <Route path="/GoFish" element={<LegacyProjectRoutes />} />
              <Route path="/CaspianHouse" element={<LegacyProjectRoutes />} />
              <Route path="/Mon58" element={<LegacyProjectRoutes />} />
              <Route path="/GS_Weapons" element={<LegacyProjectRoutes />} />
              <Route path="/SavernakeKnife" element={<LegacyProjectRoutes />} />
              <Route path="/Gallery" element={<Work />} />
              <Route path="/CV" element={<About />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
