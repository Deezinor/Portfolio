import React from "react";
import { Navigate } from "react-router-dom";

// Map legacy routes to new slugs
const legacyRouteMap: Record<string, string> = {
  "/BeatBox": "beatbox",
  "/Midnight_at_the_Pagoda": "midnight-at-the-pagoda",
  "/Habibi": "habibi",
  "/Altilium": "altilium",
  "/GoFish": "gofish",
  "/CaspianHouse": "caspian-house",
  "/Mon58": "mon58",
  "/GS_Weapons": "gs-weapons",
  "/SavernakeKnife": "savernake-knife",
};

const LegacyRedirect: React.FC = () => {
  const path = window.location.pathname;
  const slug = legacyRouteMap[path];

  if (slug) {
    return <Navigate to={`/work/${slug}`} replace />;
  }

  return <Navigate to="/work" replace />;
};

export default LegacyRedirect;
