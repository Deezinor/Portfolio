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
        </span>{" "}
        &#45;&#45; established clear targets for draw calls, texture memory, and
        frame time, enabling the team to make informed design and art decisions
        early in development.
      </p>
    </>,
  ],

  process: [
    // Scene Design
    {
      heading: "Scene Design",
      step: {
        images: ["./Assets/Images/Projects/BeatBox/BarScene.png"],
        content: (
          <>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Grey box each scene to get a sense of scale and atmosphere while
                remaining time efficient
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </>
        ),
      },
    },
    // Asset Creation
    {
      heading: "Asset Creation",
      step: {
        images: [
          "./Assets/Images/Projects/BeatBox/DrumStick_NoTexture.png",
          "./Assets/Images/Projects/BeatBox/DrumStick_textured.png",
          "./Assets/Images/Projects/BeatBox/DrumKit-NoTexture.png",
        ],
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Modelled and textured drum kit and accessories using{" "}
              <span className="font-bold">Blender</span> and exporting into{" "}
              <span className="font-bold">Unity</span> as{" "}
              <span className="font-bold">FBXs files</span>.
            </li>
            <li>
              Textures were created in{" "}
              <span className="font-bold">Adobe Substance painter</span>.
            </li>
            <li>
              For the sticks trying to maintain a polycount lower that{" "}
              <span className="font-bold">400 Triangles</span> as it is hero
              asset but a simple geometry.
            </li>
          </ul>
        ),
        useGallery: true,
      },
    },
    // Multi-texture Kit
    {
      heading: "Multi-texture Kit",
      step: {
        images: ["./Assets/Images/Projects/BeatBox/TextureAtlas.png"],
        content: <></>,
      },
    },
    // Scene lighting
    {
      heading: "Scene Lighting",
      step: {
        images: ["./Assets/Images/Projects/BeatBox/BarSceneRender.png"],
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li></li>
          </ul>
        ),
      },
    },
  ],

  gallery: [
    {
      type: "image",
      src: "./Assets/Images/Projects/BeatBox/BBVR-customize_environment.gif",
      caption: "Customise Environment" ,
    },
    {
      type: "image",
      src: "./Assets/Images/Projects/BeatBox/DrumStick_NoTexture.png",
      caption: "",
      imageSize: "max-h-60",
    },
    { type: "video", src: "/Assets/Videos/demo.mp4" },
    { type: "iframe", src: "https://www.youtube.com/embed/dQw4w9WgXcQ"},
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
};

export default function BeatBoxPage() {
  return <ProjectPageTemplate data={data} />;
}
