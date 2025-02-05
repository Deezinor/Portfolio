import React from "react";
import ProjectTemplate from "../../components/ProjectTemplate";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  { type: "image", src: "https://via.placeholder.com/600x400" },
  { type: "image", src: "https://via.placeholder.com/600x400" },
  { type: "image", src: "https://via.placeholder.com/600x400" },
  { type: "image", src: "https://via.placeholder.com/600x400" },
];

const Altilium: React.FC = () => {
  const data = {
    title: "Altilium",
    projectDescription: "An immersive VR drumming education tool.",
    // roleTitle: "Lead Artist and Deisgner",
    roleDescription: "Lead Artist and Designer",
    teamMembers:
      "Joshua Davies, Hwanjoon Jang, Nathan Thomas-Benke, and Mai Ye.",
    media: media,
    projectLogo: "https://placehold.co/600x400",
  };

  return <ProjectTemplate {...data} />;
};

export default Altilium;
