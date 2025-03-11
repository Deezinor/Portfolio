import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  {
    type: "image",
    src: "./Assets/Images/Projects/Mon58/Kitchen_View_graded_1.1.1.png",
  },
];

const Mon58: React.FC = () => {
  const data = {
    title: "Mon 58 House Associati",
    projectDescription:
      "Mon 58 House recreated in Blender for architectural visualization study.",
    media: media,
    projectLogo: "./Assets/Images/Projects/Mon58/LivingSpace_Graded.png",
  };

  return <ProjectTemplate {...data} />;
};

export default Mon58;
