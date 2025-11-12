// import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";
import type { MediaItem } from "../../../types/media";

// import { Link } from "react-router-dom";

// ===== Asset Imports =====
import KnifeUrl from "../../../../public/Assets/Models/202504_SpectraTomAikens_V01.glb?url";

const media: MediaItem[] = [
  {
    type: "image",
    src: "./Assets/Images/Projects/Savernake/202504_3KnifeRender_V01.jpg",
  },
  {
    type: "model",
    src: KnifeUrl,
    envPreset: "city",
    autoRotate: false,
    tailwindHeightClass: "w-full h-[60vh]",
  },
];

export default function Savernake() {
  return (
    <ProjectTemplate
      title="Savernake Knife"
      projectLogo="./Assets/Images/Projects/Savernake/Logo_whiteBg.jpg"
      projectDescription={
        <p>
          As part of a targeted job application, I selected a signature piece
          from Savernake Knives and recreated it in 3D using Blender. The
          project focused on replicating the brand’s distinct form language,
          material qualities, and attention to detail. I then rendered the knife
          in a studio-style environment to highlight craftsmanship and
          presentation, aiming to demonstrate both technical proficiency and an
          understanding of the brand’s visual identity.
        </p>
      }
      media={media}
    />
  );
}
