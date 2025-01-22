import React from "react";
import ProjectTemplate from "../../components/ProjectTemplate";

const Midnight_at_the_Pagoda: React.FC = () => {
  const data = {
    title: "Midnight at the Pagoda",
    projectDescription: "An immersive VR drumming education tool.",
    roleTitle: "Lead Artist and Deisgner",
    roleDescription:"Lead Artist and Designer",
    teamMembers: "Joshua Davies, Hwanjoon Jang, Nathan Thomas-Benke, and Mai Ye.",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
    projectLogo: "https://placehold.co/600x400"
  };

  return <ProjectTemplate {...data} />;
};

export default Midnight_at_the_Pagoda;
