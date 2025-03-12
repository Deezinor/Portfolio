import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  {
    type: "image",
    src: "./Assets/Images/Projects/CaspianHouse/Kitchen_001.png",
  },
];

const CaspianHouse: React.FC = () => {
  const data = {
    title: "Caspian House",
    projectDescription: (
      <>
        Caspian House is a virtual recreation of my home’s kitchen, originally
        created to help my parents visualize potential renovations before
        committing to changes. This project combined technical precision with
        creative problem-solving, allowing for an accurate digital
        representation of the space while also serving as a practical
        decision-making tool.
        <br />
        <br />
        The process began with taking physical measurements of the existing
        kitchen, which I translated into sketches before constructing a 3D model
        in Blender. By working from real-world dimensions, I ensured that
        proportions and spatial relationships were faithfully recreated. The
        visualization then evolved to explore different material choices,
        lighting conditions, and layout adjustments, helping to refine the
        renovation plans.
        <br />
        <br />
        As the project progressed, I used it as an opportunity to develop my
        skills in photorealistic rendering and post-processing with DaVinci
        Resolve. This experience reinforced the value of architectural
        visualization in bridging the gap between design concepts and real-world
        execution.
      </>
    ),
    media: media,
    projectLogo:
      "./Assets/Images/Projects/CaspianHouse/CaspianHouse_viewport.png",
  };

  return <ProjectTemplate {...data} />;
};

export default CaspianHouse;
