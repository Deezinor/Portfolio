import React from "react";
import ProjectTemplate from "../../../components/ProjectTemplate";

const media: { type: "image" | "video" | "iframe"; src: string }[] = [
  {
    type: "image",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/FirstScene-TopDown.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/SecondScene.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/Lantern and podium.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/FinalScene.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/FinalScene-Model.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/FinalScene-Render.png",
  },
  {
    type: "video",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/Scene2-turnaround.mkv",
  },
  {
    type: "iframe",
    src: "https://www.youtube.com/embed/jtHg_ufY7v4?si=VDCk3pXYdhQ2w-NB",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/Arch_Model.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/TempleTable.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/CalligraphyBrush.png",
  },
  {
    type: "image",
    src: "./Assets/Images/Projects/Midnight at the Pagoda/Scroll.png",
  },
];

const Midnight_at_the_Pagoda: React.FC = () => {
  const data = {
    title: "Midnight at the Pagoda",
    projectDescription: (
      <>
        A virtual reality exhibit design for The Great Bao&apos;en Temple in
        Nanjing, China in &quot;The Heritage That Never Disappears&quot;
        Immersive Cultural Heritage Maker Competition.
      </>
    ),
    roleTitle: "Lead Artist and Designer",
    roleDescription: (
      <>
        <div className="text-lg/[1.75]">
          <p>
            As the Lead Artist and Designer for Midnight at the Pagoda, I was
            responsible for shaping the visual, narrative, and interactive
            experience of the project.
          </p>
          <p>
            My role encompassed concept development, 3D modelling, UX design,
            environment design, historical research, scripting support, and
            scene assembly within Unity.
          </p>

          <h3 className="mt-6 mb-1 uppercase text-2xl/[1.5] text-black font-medium">
            Process & Approach
          </h3>
          <p>
            To develop the visual style and maintain historical accuracy, I
            started with sketching, mood boards, and reference gathering,
            ensuring that as many assets as possible were based on real
            artifacts found within the museum.
          </p>
          <p>
            This accuracy was reinforced through continuous fact-checking and
            collaboration with museum experts.
          </p>
          <p>
            For environment design, we began with discussions to establish goals
            and narrative direction, followed by sketching, rough 3D drafts, and
            fully textured scenes to refine the look and feel of the experience.
          </p>

          <h3 className="mt-6 mb-1 uppercase text-2xl/[1.5] text-black font-medium">
            UX & Interaction Design
          </h3>
          <p>
            I designed the user experience to be intuitive and immersive,
            leveraging:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium text-accent">
                Mental models for natural interactions
              </span>
              , such as grabbing motions and consistent control schemes.
            </li>
            <li>
              <span className="font-medium text-accent">
                Subtle guidance systems
              </span>
              , like blocked paths and highlighted areas, to direct players.
            </li>
            <li>
              <span className="font-medium text-accent">Lighting</span> to
              invoke emotion and reinforce themes.
            </li>
            <li>
              <span className="font-medium text-accent">Haptics & Audio</span>{" "}
              cues for feedback and player attention—e.g., a stone grinding
              noise cues players to look when the arch is revealed in the first
              scene.
            </li>
          </ul>

          <h3 className="mt-6 mb-1 uppercase text-2xl/[1.5] text-black font-medium">
            Tools & Technologies
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium text-accent">Procreate</span> –
              Sketching & concept development
            </li>
            <li>
              <span className="font-medium text-accent">Blender</span> – 3D
              modelling & renders
            </li>
            <li>
              <span className="font-medium text-accent">
                Substance Painter & Materialize
              </span>{" "}
              – Texture mapping
            </li>
            <li>
              <span className="font-medium text-accent">Unity & C#</span> –
              Scene assembly & minor scripting
            </li>
          </ul>

          <h3 className="mt-6 mb-1 uppercase text-2xl/[1.5] text-black font-medium">
            Challenges & Impact
          </h3>
          <p>
            One of the biggest challenges was ensuring historical accuracy while
            maintaining an engaging narrative. This required constant revisions
            and communication with museum experts and scriptwriter Niall Hill.
          </p>
          <p>
            By fact-checking rigorously and refining our script, we created an
            experience that was both authentic and narratively compelling.
          </p>
          <p>
            My contributions helped elevate Midnight at the Pagoda into a deeply
            immersive and historically faithful experience, ensuring that
            players could explore and interact with the environment in a way
            that felt both natural and engaging.
          </p>
        </div>
      </>
    ),
    teamMembers: (
      <>
        <div className="text-lg/[1.75]">
          Mai Ye{" "}
          <span className="text-italic text-sm uppercase text-gray-400">
            (Developer/Artist)
          </span>
          <br />
          Nathan Thomas-Benke{" "}
          <span className="text-italic text-sm uppercase text-gray-400">
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
        </div>
      </>
    ),
    awards: (
      <>
        <ul className="text-lg/[1.75] text-gray-500 list-disc pl-5 space-y-2">
          <li>
            Best Use of Technology at the Digital heritage Hackathon, Nanjing,
            China 2024
          </li>
        </ul>
      </>
    ),
    media: media,
    projectLogo: "./Assets/Images/Projects/Midnight_at_the_Pagoda-Logo.png",
    backgroundBoolean: "bg-black",
  };

  return (
    <>
      <ProjectTemplate {...data} />
    </>
  );
};

export default Midnight_at_the_Pagoda;
