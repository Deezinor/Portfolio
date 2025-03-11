import React from "react";
import GalleryCard from "./galleryCard";

const Gallery: React.FC = () => {
  const projects = [
    {
      image: "./Assets/Images/Projects/Boulton_Jake-Logo.png",
      title: "Mon 58 House Associati",
      description:
        "Mon 58 House recreated in Blender for architectural visualization study.",
      bgColor: "bg-black",
      link: "/Mon58",
      extraClasses: "bg-contain",
    },
    {
      image: "./Assets/Images/Projects/Boulton_Jake-Logo.png",
      title: "Caspian House",
      description: "Domestic Kitchen Visualisation",
      bgColor: "bg-black",
      link: "/CaspianHouse",
      extraClasses: "bg-contain",
    },
    {
      image: "./Assets/Images/Projects/BeatBox_VR-Logo.png",
      title: "BeatBox Studio",
      description:
        "VR drumming simulation combining interactive learning, rhythm games, and music creation.",
      bgColor: "bg-black",
      link: "/Beatbox",
      extraClasses: "bg-contain",
    },
    {
      image: "./Assets/Images/Projects/Habibi-Logo.png",
      title: "Habibi",
      description:
        "XR platform enabling long-distance connections through AI-generated notes and interactive virtual spaces.",
      bgColor: "bg-black",
      link: "/Habibi",
      extraClasses: "bg-contain",
    },
    {
      image: "./Assets/Images/Projects/Midnight_at_the_Pagoda-Logo.png",
      title: "Midnight at the Pagoda",
      description:
        "VR heritage experience recreating the Great Bao'en Temple with interactive storytelling.",
      bgColor: "bg-black",
      link: "/Midnight_at_the_Pagoda",
      extraClasses: "bg-contain",
    },
    {
      image: "./Assets/Images/Projects/GoFish-Logo.png",
      title: "GoFish",
      description:
        "Mixed reality fishing game utilizing spatial interaction for an immersive experience.",
      bgColor: "bg-black",
      link: "/GoFish",
      extraClasses: "bg-contain",
    },
    {
      image: "./Assets/Images/Projects/Altilium-Logo.png",
      title: "Altilium",
      description: "Portable-battery powered induction stove for camping.",
      bgColor: "bg-black",
      link: "/Altilium",
      extraClasses: "bg-contain",
    },
  ];

  return (
    <section className="section container mx-auto px-4" id="gallery">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2">
        {projects.map((project, index) => {
          return (
            <GalleryCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              extraClasses={project.extraClasses}
              link={project.link}
              bgColor={project.bgColor}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
