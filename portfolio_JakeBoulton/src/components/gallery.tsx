import React from "react";
import GalleryCard from "./galleryCard";

const Gallery: React.FC = () => {
  const projects = [
    // Mon58
    {
      image: "./Assets/Images/Projects/Mon58/Mon58-LogoImage_02.png",
      title: "Mon 58 House Associati",
      description:
        "Interior Architectural Visualization | Blender & DaVinci Resolve",
      bgColor: "bg-black",
      link: "/Mon58",
      extraClasses: "bg-cover",
    },

    // Caspian House
    {
      image: "./Assets/Images/Projects/CaspianHouse/CaspianHouse_viewport.png",
      title: "Caspian House",
      description:
        "Interior Architectural Visualization | Blender & DaVinci Resolve",
      bgColor: "bg-black",
      link: "/CaspianHouse",
      extraClasses: "bg-cover",
    },

    // BeatBox Studio
    {
      image: "./Assets/Images/Projects/BeatBox_VR-Logo.png",
      title: "BeatBox Studio",
      description: "VR drumming simulation | Unity, Blender & Meta Quest 3",
      bgColor: "bg-black",
      link: "/Beatbox",
      extraClasses: "bg-contain",
    },

    // Habibi
    {
      image: "./Assets/Images/Projects/Habibi-Logo.png",
      title: "Habibi",
      description:
        "XR Communication Tool | Unity, OpenAI, Blender & Meta Quest 3",
      bgColor: "bg-black",
      link: "/Habibi",
      extraClasses: "bg-contain",
    },

    // Midnight at the Pagoda
    {
      image: "./Assets/Images/Projects/Midnight_at_the_Pagoda-Logo.png",
      title: "Midnight at the Pagoda",
      description: "Virtual Reality Digital Heritage Exhibit | Unity & Blender",
      bgColor: "bg-black",
      link: "/Midnight_at_the_Pagoda",
      extraClasses: "bg-contain",
    },

    // GoFish
    {
      image: "./Assets/Images/Projects/GoFish-Logo.png",
      title: "GoFish",
      description: "Mixed Reality Fishing Game | Unity & Blender",
      bgColor: "bg-black",
      link: "/GoFish",
      extraClasses: "bg-cover",
    },

    // Altilium
    {
      image: "./Assets/Images/Projects/Altilium-Logo.png",
      title: "Altilium",
      description:
        "Portable-battery powered induction stove for camping | Adobe Suite, SolidWorks & KeyShot",
      bgColor: "bg-black",
      link: "/Altilium",
      extraClasses: "bg-cover",
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
