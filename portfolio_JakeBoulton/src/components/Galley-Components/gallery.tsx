import React from "react";
import GalleryCard from "../Galley-Components/galleryCard";
import { Link } from "react-router-dom";

const Gallery: React.FC = () => {
  const projects = [
    // BeatBox Studio
    {
      image: "./Assets/Images/Projects/BeatBox_VR-Logo.png",
      title: "BeatBox Studio",
      description: "VR drumming simulation | Unity, Blender & Meta Quest 3",
      bgColor: "bg-black",
      link: "/Beatbox",
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
  ];

  return (
    <section className="section container mx-auto px-5 lg:px-20" id="gallery">
      <div className="text-center mb-16 text-3xl md:text-4xl lg:text-5xl uppercase">
        <h2 className="">Featured Work</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
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
              disableAnimation={true}
            />
          );
        })}
      </div>
      <div className="flex justify-center  mt-10 md:mt-16">
        <Link to="/projects" className="button button--black">View More</Link>
      </div>
    </section>
  );
};

export default Gallery;
