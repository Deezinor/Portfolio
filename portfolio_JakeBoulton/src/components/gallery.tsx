import React from "react";
import GalleryCard from "./galleryCard";

const Gallery: React.FC = () => {
  const projects = [
    {
      image: "src/Assets/Images/Projects/BeatBox_VR-Logo.png", // Replace with your image URL
      title: "BeatBox Studio",
      description: "Description for Project 1",
      bgColor: "bg-black",
      link: "/Beatbox",
      extraClasses: "bg-contain",
    },
    {
      image: "src/Assets/Images/Projects/Habibi-Logo.png",
      title: "Habibi",
      description: "Description for Project 2",
      bgColor: "bg-black",
      link: "/Habibi",
      extraClasses: "bg-contain"
    },
    {
      image: "src/Assets/Images/Projects/Midnight_at_the_Pagoda-Logo.png",
      title: "Midgnight at the Pagoda",
      description: "Description for Project 3",
      bgColor: "bg-black",
      link: "/Midnight_at_the_Pagoda",
      extraClasses: "bg-contain"
    },
    {
      image: "src/Assets/Images/Projects/GoFish-Logo.png",
      title: "GoFish",
      description: "Description for Project 3",
      bgColor: "bg-black",
      link: "/GoFish",
      extraClasses: "bg-contain"
    },
    {
      image: "src/Assets/Images/Projects/Altilium-Logo.png",
      title: "Altilium",
      description: "Description for Project 4",
      bgColor: "bg-black",
      link: "/Altilium",
      extraClasses: "bg-contain"
    },
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <GalleryCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            extraClasses={project.extraClasses}
            link={project.link}
            bgColor={project.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
