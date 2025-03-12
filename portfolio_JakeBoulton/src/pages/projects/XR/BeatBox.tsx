import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";

// Define media items explicitly
const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  { type: "image", src: "./Assets/Images/Projects/BeatBox/BBVR-Freeplay.gif" },
  {
    type: "image",
    src: "./Assets/Images/Projects/BeatBox/BBVR-customize_environment.gif",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/BeatBox/DrumStick_NoTexture.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/BeatBox/DrumStick_textured.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/BeatBox/DrumKit-NoTexture.png",
  },
];

const data = {
  title: "BeatBox Studio",
  projectDescription: (
    <>
      <span className="font-medium text-gray-950">BeatBox Studio</span> is a VR
      drumming simulator and educational platform, offering free-play,
      structured lessons, and rhythm-based game modes for players of all skill
      levels.
    </>
  ),
  roleTitle: "Lead Artist and Designer",
  roleDescription: (
    <>
      In this project, I served as the{" "}
      <span className="font-medium text-gray-950">
        Lead Artist and Designer
      </span>
      , overseeing the development and integration of 3D modelling, UI, and UX
      design.
      <br />
      <br />
      The 3D assets were created using{" "}
      <span className="font-medium text-gray-950">Blender</span>, with textures
      crafted in{" "}
      <span className="font-medium text-gray-950">Adobe Substance Painter</span>{" "}
      to produce cohesive global texture maps. Where appropriate, additional
      textures were sourced online to maintain efficiency and quality.
      <br />
      I also reviewed and optimized 3D models created or acquired by team
      members to ensure consistency in art style and optimal performance within
      the game engine.
      <br />
      <br />
      Following the submission of the project&apos;s first draft for peer review
      in our Master&apos;s program, I incorporated feedback regarding the UI and
      overall user experience of the application. I facilitated a team
      discussion to identify actionable improvements and guided the
      implementation process to enhance the final design.
    </>
  ),
  projectBrief: (
    <>
      Design and build simple VR environments with realistic graphics and
      lighting. Describe how VR is different from other media, including its
      effects on human perception.
    </>
  ),
  teamMembers: (
    <>
      Mai Ye{" "}
      <span className="text-italic text-sm uppercase text-gray-400">
        (Developer/Artist)
      </span>
      <br />
      Nathan Thomas-Benke{" "}
      <span className="text-italic text-sm uppercase text-gray-400">
        (Developer/Audio)
      </span>
      <br />
      Joshua Davies{" "}
      <span className="text-italic text-sm uppercase text-gray-400">
        (Lead Developer)
      </span>
      <br />
      Hwanjoon Jang{" "}
      <span className="text-italic text-sm uppercase text-gray-400">
        (Developer/QA)
      </span>
    </>
  ),
  projectLogo: "./Assets/Images/Projects/BeatBox/BBVR-logo.gif",
  media: media, // Assign the explicitly typed media array
};

const BeatBox: React.FC = () => {
  return <ProjectTemplate {...data} />;
};

export default BeatBox;
