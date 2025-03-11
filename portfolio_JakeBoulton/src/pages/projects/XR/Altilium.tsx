import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  {
    type: "image",
    src: "public/Assets/Images/Projects/Altilium/Altilium_Introduction.jpg",
  },
  {
    type: "image",
    src: "public/Assets/Images/Projects/Altilium/InductionCoil_Layout.jpg",
  },
  {
    type: "image",
    src: "public/Assets/Images/Projects/Altilium/Altilium_Drawing-Base.jpg",
  },
  {
    type: "image",
    src: "public/Assets/Images/Projects/Altilium/Altilium_Drawing-CoilAssembly.jpg",
  },
  {
    type: "image",
    src: "public/Assets/Images/Projects/Altilium/Altilium_Drawing-Coil.jpg",
  },
  {
    type: "image",
    src: "public/Assets/Images/Projects/Altilium/Altilium_Drawing-PlasticFrame.jpg",
  },
  {
    type: "image",
    src: "public/Assets/Images/Projects/Altilium/Altilium_Drawing-GlassTop.jpg",
  },
  {
    type: "image",
    src: "public/Assets/Images/Projects/Altilium/Altilium-BaseColours.jpg",
  },
];

const Altilium: React.FC = () => {
  const data = {
    title: "Altilium",
    projectDescription: "Portable-battery powered induction stove for camping.",
    media: media,
    projectLogo: "public/Assets/Images/Projects/Altilium/Altilium Logo.jpg",
  };

  return <ProjectTemplate {...data} />;
};

export default Altilium;
