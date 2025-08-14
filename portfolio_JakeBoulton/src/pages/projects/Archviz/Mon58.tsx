import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  {
    type: "image",
    src: "./Assets/Images/Projects/Mon58/Kitchen_View_graded.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Mon58/PureRef-Screenshot.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Mon58/Mon58-LogoImage_02.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Mon58/LivingSpace_Graded.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Mon58/Model.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Mon58/SpiralStairs.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Mon58/KitchenIsland.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Mon58/Dishwasher.png",
  },
];

const Mon58: React.FC = () => {
  const data = {
    title: "Mon 58 House Associati",
    projectDescription: (
      <>
        Mon 58 House Associati is a digital recreation of an existing
        architectural project featured on ArchDaily, undertaken as a personal
        study to refine my skills in architectural visualization. Beyond
        rendering realism, this project focused on interpreting and translating
        architectural drawings into a fully realized 3D environment.
        <br />
        <br />
        Working from construction and architectural plans, I aimed to accurately
        model the space, ensuring correct proportions, materiality, and lighting
        that reflect the original design. This process deepened my understanding
        of reading and reconstructing spaces from technical documentation, a
        crucial skill in archviz.
        <br />
        <br />
        Using Blender for modelling and rendering, and DaVinci Resolve for
        post-production, I explored advanced techniques in global illumination,
        composition, and texturing to bring the space to life. By working from
        real-world references, this study strengthened my ability to bridge
        technical accuracy with artistic presentation in digital architectural
        storytelling.
      </>
    ),
    media: media,
    projectLogo: "./Assets/Images/Projects/Mon58/LivingSpace_Graded.png",
  };

  return <ProjectTemplate {...data} />;
};

export default Mon58;
