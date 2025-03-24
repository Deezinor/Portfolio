import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";
import { Link } from "react-router-dom";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  {
    type: "video",
    src: "./Assets/Images/Projects/GS_Weapons/TurnaroundAnim.mp4",
  },
  // Model 1
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 1/Model_01_Turnaround_front.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 1/Model_01_Turnaround_left.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 1/Model_01_Turnaround_right.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 1/Model_01_wireframe.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 1/Model_01_Turnaround.png",
  },
  // Model 6
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 6/Model_06_BeautyRender.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 6/Model_06_Texture_Presentation.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 6/Model_06_Turnaround.png",
  },
  // Model 7
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 7/2024_02_Turnaround_front.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 7/2024_02_Turnaround_left.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 7/2024_02_Turnaround_right.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 7/2024_02_Wireframe.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 7/Model_07_BeautyRender.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 7/Model_07_Texture_Presentation.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 7/Model_07_Turnaround.png",
  },
  // Model 8
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 8/2024_02_Turnaround_front.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 8/2024_02_Turnaround_left.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 8/2024_02_Turnaround_right.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 8/2024_02_Wireframe.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 8/Model_08_BeautyRender.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 8/Model_08_Texture_Presentation.png",
  },
  // Model 11
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 11/2024_02_Turnaround_front.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 11/2024_02_Turnaround_left.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 11/2024_02_Turnaround_right.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 11/2024_02_Wireframe.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 11/2024_02_Wireframe.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 11/Model_11_BeautyRender.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/GS_Weapons/Model 11/Model_11_Texture_Presentation.png",
  },
];

const GS_Weapons: React.FC = () => {
  const data = {
    title: "Guild Wars 2 - Weapons Set",
    projectDescription: (
      <>
        A set of weapons created for a 3D modelling module on my Master&apos;s
        course.
        <br />
        <br />
        Concept art by Viviane Kosty{" "}
        <Link
          to="https://www.artstation.com/artwork/6OVeV"
          className="underline hover:font-medium text-black"
        >
          found here
        </Link>
        .
        <br />
        <br />
        Software used:
        <ul className="ml-8 list-disc">
          <li>Blender</li>
          <li>Adobe Substance Painter</li>
        </ul>
      </>
    ),
    projectBrief: (
      <>
        The brief was to create a set of weapons based on either personal
        concept art or referencing someone else&apos;s work. I chose to
        reference Viviane Kosty&apos;s concept art for a Guild Wars 2 Weapon
        set. The weapons had to be created in Blender and textured in Substance
        Painter.
      </>
    ),
    media: media,
    projectLogo: "./Assets/Images/Projects/GS_Weapons/GS_Weapons_Logo.png",
  };

  return <ProjectTemplate {...data} />;
};

export default GS_Weapons;
