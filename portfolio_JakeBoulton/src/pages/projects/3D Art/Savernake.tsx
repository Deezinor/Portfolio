import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";
// import { Link } from "react-router-dom";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  {
    type: "image",
    src: "./Assets/Images/Projects/Savernake/202504_3KnifeRender_V01.jpg",
  },
];

const SavernakeKnife: React.FC = () => {
  const data = {
    title: "Savernake Knife",
    projectLogo: "./Assets/Images/Projects/Savernake/Logo_whiteBg.jpg",
    projectDescription: (
      <>
        As part of a targeted job application, I selected a signature piece from
        Savernake Knives and recreated it in 3D using Blender. The project
        focused on replicating the brand’s distinct form language, material
        qualities, and attention to detail. I then rendered the knife in a
        studio-style environment to highlight craftsmanship and presentation,
        aiming to demonstrate both technical proficiency and an understanding of
        the brand’s visual identity.
      </>
    ),
    media: media,
  };
  return <ProjectTemplate {...data} />;
};

export default SavernakeKnife;
