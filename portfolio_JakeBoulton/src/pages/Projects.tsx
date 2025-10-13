import React from "react";
import GalleryCard from "../components/Galley-Components/galleryCard";
import Header from "../components/Header-Components/header";
// import Footer from "../components/Footer-Components/footer";

const Projects: React.FC = () => {
  const projects = [
    // Savernake Knife
    {
      image: "./Assets/Images/Projects/Savernake/202504_3KnifeRender_V01.jpg",
      title: "Savernake Knife",
      description: "Product Modelling & Visualization | Blender",
      bgColor: "bg-black",
      link: "/SavernakeKnife",
      extraClasses: "bg-contain"
    },
    // Goldsmiths Weapons Set
    {
      image: "./Assets/Images/Projects/GS_Weapons/GS_Weapons_Logo.png",
      title: "Guild Wars 2 - Weapons Set",
      description: "3D Art | Blender & Substance Painter",
      bgColor: "bg-black",
      link: "/GS_Weapons",
      extraClasses: "bg-contain",
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

    // Midnight at the Pagoda
    {
      image: "./Assets/Images/Projects/Midnight_at_the_Pagoda-Logo.png",
      title: "Midnight at the Pagoda",
      description: "Virtual Reality Digital Heritage Exhibit | Unity & Blender",
      bgColor: "bg-black",
      link: "/Midnight_at_the_Pagoda",
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

    // GoFish
    {
      image: "./Assets/Images/Projects/GoFish-Logo.png",
      title: "GoFish",
      description: "Mixed Reality Fishing Game | Unity & Blender",
      bgColor: "bg-black",
      link: "/GoFish",
      extraClasses: "bg-cover",
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
    <>
      <Header />
      <section className="section container mx-auto mt-20 px-12" id="gallery">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Previous Projects</h1>
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
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
