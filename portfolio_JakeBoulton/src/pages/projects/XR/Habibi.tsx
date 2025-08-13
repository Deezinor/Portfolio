import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  { type: "image", src: "https://via.placeholder.com/600x400" },
  { type: "image", src: "https://via.placeholder.com/600x400" },
  { type: "image", src: "https://via.placeholder.com/600x400" },
];

const Habibi: React.FC = () => {
  const data = {
    title: "Habibi",
    projectDescription: (
      <>
        Habibi is an innovative mixed reality application designed to bridge the
        gap for individuals in long-distance relationships. The project allows
        users to share handwritten notes, images, and objects on a virtual wall
        powered by AI, creating a shared digital space that fosters intimacy and
        connection. The application also features an interactive pet that
        seamlessly moves between users&apos; virtual walls, adding a playful and
        personal touch to their shared experience.
      </>
    ),
    roleTitle: "XR Designer and Developer",
    roleDescription: (
      <>
        Role Description: My responsibilities included crafting an emotionally
        resonant user experience through thoughtful interface design and
        interactive elements. I contributed to designing the shared digital
        space, developing engaging and visually appealing interactions, and
        enhancing the interactive pet feature. Additionally, I supported the
        development process by addressing and fixing bugs, allowing teammates to
        focus on their specialized tasks and ensuring smooth project
        progression.
      </>
    ),
    teamMembers: (
      <>
        Mai Ye{" "}
        <span className="text-italic text-sm uppercase text-gray-400">
          (Developer/Artist)
        </span>
        <br />
        Mohamed El Eryan{" "}
        <span className="text-italic text-sm uppercase text-gray-400">
          (Video Production/UX Design)
        </span>
        <br />
        Joshua Davies{" "}
        <span className="text-italic text-sm uppercase text-gray-400">
          (Lead Developer)
        </span>
        <br />
        Hwanjoon Jang{" "}
        <span className="text-italic text-sm uppercase text-gray-400">
          (Developer/QA)
        </span>
      </>
    ),
    awards: (
      <>
        <ul className="text-lg/[1.75] text-gray-500 list-disc pl-5 space-y-2">
          <li>Runner&apos;s Up - XR Hack Istanbul, Turkey 2024</li>
        </ul>
      </>
    ),
    projectLogo: "./Assets/Images/Projects/Habibi-Logo.png",
    media: media,
  };

  return <ProjectTemplate {...data} />;
};

export default Habibi;
