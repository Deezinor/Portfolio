import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  {
    type: "image",
    src: "./Assets/Images/Projects/Altilium/Altilium_Introduction.jpg",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Altilium/Altilium-BaseColours.jpg",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Altilium/InductionCoil_Layout.jpg",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Altilium/Altilium_Drawing-Base.jpg",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Altilium/Altilium_Drawing-CoilAssembly.jpg",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Altilium/Altilium_Drawing-Coil.jpg",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Altilium/Altilium_Drawing-PlasticFrame.jpg",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Altilium/Altilium_Drawing-GlassTop.jpg",
  },
];

const Altilium: React.FC = () => {
  const data = {
    title: "Altilium",
    projectDescription: "Portable-battery powered induction stove for camping.",
    roleTitle: "Designer",
    roleDescription: (
      <>
        <div>
          <p>Responsible for the design, development, and visualisation of the product.</p>
        </div>
      </>
    ),
    teamMembers: "Solo Project",
    projectBrief:
      "Altilium is a portable induction stove designed for camping, powered by a conceptual (2020) solid state rechargeable battery. It features a compact design with a removable induction coil, allowing for easy transport and setup. The stove is equipped with a glass top for safety and ease of cleaning, and it includes a plastic frame to protect the induction coil during transport.",
    media: media,
    projectLogo: "./Assets/Images/Projects/Altilium/Altilium Logo.jpg",
  };

  return <ProjectTemplate {...data} />;
};

export default Altilium;
