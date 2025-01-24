import React from "react";
import ProjectTemplate from "../../components/ProjectTemplate";

const GoFish: React.FC = () => {
  const data = {
    title: "GoFish",
    projectDescription: (
      <>
        GoFish is an engaging mixed reality experience that reimagines the
        classic card game in a modern, immersive way. By leveraging cutting-edge
        XR technologies, the project bridges the physical and virtual worlds to
        create a dynamic and interactive environment. GoFish offers players a
        unique blend of strategy, skill, and nostalgia, making it an enjoyable
        experience for all ages.
      </>
    ),
    roleTitle: "Lead Designer, Artist, & Project Admin",
    roleDescription: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium text-black">UX Design:</span> I created intuitive interfaces and interaction designs to
            ensure seamless and engaging gameplay in the mixed reality
            environment.
          </li>

          <li>
            <span className="font-medium text-black">2D/3D Art:</span> I contributed to the artistic direction by designing both
            2D and 3D assets for the project.
          </li>

          <li>
            <span className="font-medium text-black">Project Administration:</span> I managed administrative tasks, including
            maintaining the project on Devpost, preparing PDF documentation, and
            handling competition-related submissions.
          </li>

          <li>
            <span className="font-medium text-black">Concept Ideation:</span> I worked closely with the team on brainstorming
            and ideation, introducing the overarching concept of developing a
            GoFish remake in XR, which was further refined and developed
            collaboratively.
          </li>
        </ul>
      </>
    ),
    projectBrief:
      "GoFish was conceptualized as a demonstration of how traditional games can be revitalized through the use of XR technologies. The goal was to create a playful yet innovative product that would appeal to all ages, demonstrating the potential of augmented and mixed reality in entertainment and beyond.",
    teamMembers: (
      <>
        Mai Ye{" "}
        <span className="text-italic text-sm uppercase text-gray-400">
          (Developer/Artist)
        </span>
        <br />
        Nathan Thomas-Benke{" "}
        <span className="text-itali text-sm uppercase text-gray-400">
          (Developer/Audio)
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
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
    projectLogo: "https://placehold.co/600x400",
  };

  return <ProjectTemplate {...data} />;
};

export default GoFish;
