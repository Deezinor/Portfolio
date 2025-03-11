import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  { type: "image", src: "https://via.placeholder.com/600x400" },
];

const CaspianHouse: React.FC = () => {
  const data = {
    title: "Caspian House",
    projectDescription: "Domestic Kitchen Visualisation",
    media: media,
    projectLogo: "https://via.placeholder.com/600x400",
  };

  return <ProjectTemplate {...data} />;
};

export default CaspianHouse;
