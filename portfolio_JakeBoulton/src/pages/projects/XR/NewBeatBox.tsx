// src/pages/BeatBox.tsx
import React from "react";
import ProjectPageTemplate, {
  ProjectPageData,
} from "../../../Templates/ProjectPageTemplate";

const data: ProjectPageData = {
  title: "BeatBox Studio",
  summary:
    "A VR percussion tool designed for learners and creators alike, combining education, play, and community.",
  heroSrc: "./Assets/Images/Projects/BeatBox/BBVR-logo.gif",

  snapshot: [
    { label: "Role(s):", value: "XR Designer, 3D Artist" },
    { label: "Team:", value: "4th Frontier" },
    { label: "Context:", value: "MA Project" },
    { label: "Duration:", value: "4 months" },
    { label: "Platform:", value: "Meta Quest 3" },
    { label: "Highlights:", value: "Jury Prize — Innovate UK" },
  ],

  responsibilities: [
    "Prototyped interaction flows in Unity \u2014 reduced onboarding times by ~20% in later builds.",
    "Designed drum kit assets and materials \u2014 striking a balance between fidelity and performance for the hero object.",
    "Designed, modelled, and textured environments optimised for standalone VR \u2014 achieving stable 90 FPS on Quest 3 through efficient topology, material atlasing, and baked lighting..",
    <>
      <p className="text-gray-600">
        <span className="font-medium">
          Authored performance budget and profiling plan
        </span>
        {" "}&#45;&#45; established clear targets for draw calls, texture memory, and
        frame time, enabling the team to make informed design and art decisions
        early in development.
      </p>
    </>,
  ],

  process: [
    {
      heading: "Early prototypes",
      step: {
        imageUrl: "https://placehold.co/800x600",
        content: "Greybox kit, stick input mapping.",
      },
    },
    {
      heading: "Iteration & feedback",
      step: {
        imageUrl: "https://placehold.co/800x600",
        content: "Latency, hit windows, and comfort.",
      },
    },
  ],

  gallery: [
    {
      type: "image",
      src: "https://placehold.co/1200x800",
      caption: "Gameplay mock",
    },
    {
      type: "image",
      src: "https://placehold.co/800x1200",
      caption: "UI concept",
    },
    { type: "video", src: "/Assets/Videos/demo.mp4" },
    { type: "iframe", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ],
  galleryTitle: "Project Gallery",

  reflection: {
    worked: "Short loops for practice, simple feedback UI.",
    didnt: "Overly complex menus in early builds.",
    next: "Better stick calibration flow, onboarding micro-lessons.",
  },

  appendix: [
    {
      label: "Tools:",
      entry: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Blender 4.5</li>
          <li>Unity 6 (URP)</li>
        </ul>
      ),
    },
    {
      label: "Platforms:",
      entry: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Meta Quest 3 (test)</li>
          <li>Standalone XR (target)</li>
        </ul>
      ),
    },
  ],
  appendixTitle: "Technical Appendix",
};

export default function BeatBoxPage() {
  return <ProjectPageTemplate data={data} />;
}
