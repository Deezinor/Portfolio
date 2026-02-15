import React from "react";

import Header from "../components/Header-Components/header";
import ExperienceEntry from "../components/CV-Components/CV-ExperienceEntry";
import EducationEntry from "../components/CV-Components/CV-EducationEntry";
import ProjectsEntry from "../components/CV-Components/CV-ProjectsEntry";
// import SkillEntry from "../components/CV-SkillEntry";
import ReferenceEntry from "../components/CV-Components/CV-Reference";
import { CiLocationOn, CiMobile1 } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import AwardEntry from "../components/CV-Components/CV-AwardsEntry";

const CV: React.FC = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const handleDownloadPDF = () => {
    window.open("./Assets/PDFs/Jake-Boulton-CV.pdf", "CV-Jake-Boulton");
  };

  const mobileNumber = "+44 7565 312 904";
  const email = "jboulton@proton.me";

  const ProfessionalDevelopment = {
    name: "Professional Development",
    role: "XR & 3D Designer | Architectural Visualiser",
    dates: "September 2024 - Present",
    location: "London, UK",
    description: [
      {
        heading: "XR Design & Development",
        paragraph:
          "Working on user experience in 3D spaces, immersive interactions, and spatial UI design for VR, AR, and MR applications.",
      },
      {
        heading: "Architectural Visualisation (ArchViz)",
        paragraph:
          "Studying CGI lighting, composition, and photography to improve 3D visualisation skills.",
      },
      {
        heading: "3D Software & Rendering",
        bullets: [
          "Learning 3DS Max & Corona Renderer for architectural visualisation and CGI rendering.",
          "Developing Unreal Engine skills, focusing on XR applications and real-time rendering.",
        ],
      },
      {
        heading: "Technical & Professional Growth",
        bullets: [
          "Exploring human-centered design, spatial UX, and web development with React, TypeScript, and TailwindCSS.",
        ],
      },
    ],
  };

  const Felsted = {
    name: "Felsted School",
    role: "Design & Technology Maternity Cover Teacher",
    dates: "February 2021 - July 2021",
    location: "Felsted, Essex, UK",
    link: "https://www.felsted.org/",
    description: [
      {
        bullets: [
          "Taught students aged 13 - 18, including GCSE, A-level, and International Baccalaureate (IB).",
          "Led lessons combining creative and technical design thinking.",
        ],
      },
    ],
  };
  const FlexiGroup = {
    name: "FlexiGroup UK",
    role: "R&D Coordinator",
    dates: "August 2017 - March 2020",
    location: "Dunmow, Essex, UK",
    link: "https://www.flexigroupuk.com/",
    description: [
      {
        bullets: [
          "Designed and prototyped new products using CAD.",
          "Managed user testing and refinement of components.",
          "Improved production processes through iterative design.",
        ],
      },
    ],
  };
  const PowerCon = {
    name: "Power Construction Hertz Ltd",
    role: "Labourer",
    dates: "June 2016 - September 2023",
    location: "Dunmow, Essex, UK",
  };
  const Masters = {
    name: "Goldsmiths, University of London",
    title: "MA Virtual and Augmented Reality: 3D Graphics and User Experience",
    dates: "September 2023 - September 2024",
    result: "Distinction (1st)",
    degreeType: "Master's Degree (MA)",
  };
  const Undergrad = {
    name: "University of the West of England",
    title: "Product Design Technology (Hons)",
    dates: "September 2016 - May 2020",
    result: "2:1",
    degreeType: "Undergraduate Degree (BSc)",
  };
  const Mon58 = {
    name: "Mon58",
    description: "Interior Visualisation Project",
    dates: "February 2025",
    summary: (
      <>
        <ul className="list-disc ml-5 mt-2 flex flex-col gap-1 text-sm">
          <li>
            Designed a photorealistic interior visualisation based on the Mon 58
            House by Studiotamat, focusing on realism and composition for
            personal development. Responsible for all aspects of the project,
            including 3D modelling, material creation, lighting, rendering, and
            post-production.
          </li>
          <li>Tools: Blender, Substance Painter, DaVinci Resolve</li>
        </ul>
      </>
    ),
    tags: [
      { tag: "3D Modelling" },
      { tag: "ArchViz" },
      { tag: "Blender" },
      { tag: "Rendering" },
      { tag: "Interior" },
      { tag: "Lighting" },
    ],
  };
  const CaspianHouse = {
    name: "Caspian House",
    description: "Interior Visualisation Project",
    dates: "January 2025",
    summary: (
      <>
        <ul className="list-disc ml-5 mt-2 flex flex-col gap-1 text-sm">
          <li>
            Created a high-fidelity interior visualization inspired of Caspian
            House, emphasizing realistic lighting, materials, and composition.
            Executed the full pipeline independently—from modelling and
            texturing to final post-production.
          </li>
          <li>Tools: Blender, Substance Painter, DaVinci Resolve</li>
        </ul>
      </>
    ),
    tags: [
      { tag: "3D Modelling" },
      { tag: "ArchViz" },
      { tag: "Blender" },
      { tag: "Rendering" },
      { tag: "Interior" },
      { tag: "Lighting" },
    ],
  };
  const BeatBox = {
    name: "BeatBox Studio",
    award: "Jury Prize - Innovate Immersive Tech Awards 2024",
    description: "Virtual Reality Drum Simulator",
    dates: "March 2023 - Ongoing",
    summary: (
      <>
        <ul className="list-disc ml-5 mt-2 flex flex-col gap-1 text-sm">
          <li>
            Led UI/UX design for a real-time, interactive VR drumming
            simulation, ensuring smooth user interaction and immersive
            engagement.
          </li>
          <li>
            Designed and optimized 3D environments, lighting, and textures for
            performance in a real-time engine. <br />
            (Winner of Innovate UK Immersive Tech Awards)
          </li>
        </ul>
      </>
    ),
    tags: [
      { tag: "VR" },
      { tag: "XR Design" },
      { tag: "Unity" },
      { tag: "Award Winning" },
      { tag: "Education" },
      { tag: "Game" },
    ],
  };
  const Midnight = {
    name: "Midnight at the Pagoda",
    award: "Best Use of Technology at Digital Heritage 2024",
    description: "Virtual Reality Heritage Exhibit",
    dates: "May 2024 - July 2024",
    summary: (
      <>
        <ul className="list-disc ml-5 mt-2 flex flex-col gap-1 text-sm">
          <li>
            Designed and implemented interactive UX/UI for a digital heritage
            exhibition, showcasing historical environments in AR/VR.
          </li>
          <li>
            Focused on realistic texturing, lighting, and immersive scene
            creation to bring historical architecture to life.
            <br />
            (Best Use of Technology at Digital Heritage 2024)
          </li>
        </ul>
      </>
    ),
    tags: [
      { tag: "VR" },
      { tag: "Award Winning" },
      { tag: "XR Design" },
      { tag: "Cultural Heritage" },
      { tag: "Experience" },
      { tag: "Unity" },
      { tag: "Remote Collaboration" },
    ],
  };
  const Habibi = {
    name: "Habibi",
    description: "Mixed Reality Communication Tool",
    dates: "September 2024",
    summary: (
      <>
        <ul className="list-disc ml-5 mt-2 flex flex-col gap-1 text-sm">
          <li>
            Designed the spatial UI/UX for a mixed reality platform facilitating
            real-time interaction and digital object sharing.
          </li>
          <li>
            Developed 3D interactive environments optimized for real-time
            performance and immersive user experiences.
            <br />
            (Runner-Up in Utility & Tools, XR Hack Istanbul 2024)
          </li>
        </ul>
      </>
    ),
    tags: [
      { tag: "VR" },
      { tag: "MR" },
      { tag: "Award Winning" },
      { tag: "XR Design" },
      { tag: "Unity" },
      { tag: "AI Integration" },
      { tag: "Communication" },
    ],
  };
  // const GoFish = {
  //   name: "Go Fish MR",
  //   description: "Mixed Reality Card Game",
  //   dates: "September 2024",
  //   summary: (
  //     <>
  //       <ul className="list-disc ml-5 mt-2 flex flex-col gap-1 text-sm">
  //         <li>
  //           Created and refined 3D assets and environments, ensuring smooth
  //           real-time interaction in a multiplayer MR setting.
  //         </li>
  //         <li>
  //           Designed immersive spatial interfaces and game mechanics, optimizing
  //           for performance and user engagement.
  //         </li>
  //       </ul>
  //     </>
  //   ),
  //   tags: [
  //     { tag: "MR" },
  //     { tag: "XR Design" },
  //     { tag: "Unity" },
  //     { tag: "Game" },
  //     { tag: "Multiplayer" },
  //     { tag: "Game Design" },
  //   ],
  // };
  const Istanbul = {
    name: "Utility & design Runner's Up",
    title: "XR Hack - Istanbul",
    date: "September 2024",
    link: "https://www.xrhack.com/",
    summary:
      "Part of the team behind the Habibi application in the Utility & Tools category.",
  };
  const Innovate = {
    name: "Jury Prize Winner",
    title: "Innovate UK - Immersive Tech Awards 2024",
    date: "March 2024",
    link: "https://iuk.immersivetechnetwork.org/awards/",
    summary: "Group member of BeatBoxVR in the Technical Innovation category",
  };
  const DigitalHeritage = {
    name: "Best Use of Technology",
    title: (
      <>
        <em>The Heritage That Never Disappears</em> - Immersive Cultural
        Heritage Maker Competition
      </>
    ),
    date: "July 2024",
    summary:
      "Recognized for a cutting-edge immersive digital exhibition engaging young, international audiences with the history of the Great Bao’en Temple.",
  };
  const Shaun = {
    name: "Shaun Pledger",
    job: "CEO of Alloy Fabweld & FlexiGroup Ltd",
    phone: "07967 487 655",
    email: "shaun@alloyfabweld.com",
  };
  const Dave = {
    name: "Dave Franklin",
    job: "Foreman/ Site Supervisor",
    phone: "07934 910240",
  };
  const Asha = {
    name: "Asha Easton",
    job: "Immersive Tech Network Lead",
    email: "asha.easton@iukbc.org.uk",
  };
  // const Sylvia = {
  //   name: "Sylvia Pan",
  //   job: "University Lecturer and Thesis supervisor",
  //   email: "X.Pan@gold.ac.uk",
  // };

  return (
    <>
      <Header />
      <section className="container mx-auto bg-white" ref={contentRef}>
        {/* "Header" */}
        <section className="flex flex-wrap justify-between items-center md:max-w-screen-md mx-auto px-5 gap-3">
          <div className="flex flex-wrap items-end">
            <img
              src="./Assets/Images/Jake_Boulton.JPG"
              alt="Jake Boulton wearing a graduation cap & gown and a blue suit."
              className="mr-4 sm:h-auto sm:w-dvw md:h-32 md:w-auto"
            />
            <div className="flex flex-col">
              {/* <h1 className="mb-2 text-4xl">Jake Boulton</h1> */}
              <h2>3D Artist | XR Designer | Visualisation Specialist</h2>
              <div className="flex flex-col">
                <div className="flex gap-1 items-center">
                  <CiLocationOn className="text-red-600" />
                  <p>London, UK</p>
                </div>
                <div className="flex gap-1 items-center">
                  <CiMobile1 className="text-red-600" />
                  <a
                    href={`tel:${mobileNumber}`}
                    onClick={(e) => {
                      if (!/Mobi|Android/i.test(navigator.userAgent)) {
                        e.preventDefault();
                      }
                    }}
                    className="cursor-pointer underline font-poppins text-secondary-base"
                  >
                    {mobileNumber}
                  </a>
                </div>
                <div className="flex gap-1 items-center">
                  <MdOutlineAlternateEmail className="text-red-600" />
                  <a
                    href={`mailto:${email}`}
                    onClick={(e) => {
                      if (!/Mobi|Android/i.test(navigator.userAgent)) {
                        e.preventDefault();
                      }
                    }}
                    className="cursor-pointer underline lowercase font-poppins text-secondary-base"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/jake-m-boulton/">
              <FaLinkedin className="text-blue-900" />
            </a>
            <a href="https://github.com/Deezinor">
              <FaGithub />
            </a>
          </div>
        </section>

        {/* Summary */}
        <section className="flex flex-wrap justify-between items-center md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="text-xl text-red-600 font-medium">Summary</h2>
          <p>
            Versatile and creative 3D Artist and XR Designer with experience in
            modelling, lighting, rendering, and spatial UX for both real-time
            and pre-rendered environments. Skilled in architectural
            visualisation, interactive design, and immersive storytelling.
            Proficient in industry-standard tools and engines.
          </p>
        </section>

        {/* Experience */}
        <section className="flex flex-col md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="text-xl text-red-600 font-medium">Experience</h2>
          <div className="">
            <ExperienceEntry {...ProfessionalDevelopment} />
            <ExperienceEntry {...Felsted} />
          </div>
          <ExperienceEntry {...FlexiGroup} />
          <ExperienceEntry {...PowerCon} />
        </section>

        {/* Skills */}
        <section className="flex flex-col md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="my-3 text-xl text-red-600 font-medium">Skills</h2>
          <div className="grid grid-cols-2 gap-5">
            <ul className="list-disc ml-5 mt-2 flex flex-col gap-1">
              <li>
                <span className="font-medium">3D Modelling & Texturing:</span>{" "}
                Blender, 3ds Max, Adobe Substance Painter
              </li>
              <li>
                <span className="font-medium">Rendering:</span> Unreal Engine,
                Corona, V-Ray, Cycles
              </li>
              <li>
                <span className="font-medium">
                  Real-Time Design & Development:
                </span>{" "}
                Unreal Engine, Unity, C#
              </li>
            </ul>
            <ul className="list-disc ml-5 mt-2 flex flex-col gap-1">
              <li>
                <span className="font-medium">UI/UX:</span> Spatial design,
                interaction design, user testing
              </li>
              <li>
                <span className="font-medium">Web Development:</span> React,
                TypeScript, TailwindCSS, HTMl, CSS
              </li>
              <li>
                <span className="font-medium">Tools:</span> Photoshop,
                Illustrator, DaVinci Resolve, Git, Trello, SourceTree
              </li>
            </ul>
          </div>
        </section>

        {/* Awards */}
        <section className="flex flex-col md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="my-3 text-xl text-red-600 font-medium">Awards</h2>
          <AwardEntry {...Istanbul} />
          <AwardEntry {...Innovate} />
          <AwardEntry {...DigitalHeritage} />
        </section>

        {/* Education */}
        <section className="flex flex-col md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="text-xl text-red-600 font-medium">Education</h2>
          <EducationEntry {...Masters} />
          <EducationEntry {...Undergrad} />
        </section>

        {/* Projects */}
        <section className="flex flex-col md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="text-xl text-red-600 font-medium">Projects</h2>
          <ProjectsEntry {...Mon58} />
          <ProjectsEntry {...CaspianHouse} />
          <ProjectsEntry {...Midnight} />
          <ProjectsEntry {...BeatBox} />
          <ProjectsEntry {...Habibi} />
        </section>

        {/* References */}
        <section className="flex flex-col md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="my-3 text-xl text-red-600 font-medium">References</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ReferenceEntry {...Shaun} />
            <ReferenceEntry {...Dave} />
            <ReferenceEntry {...Asha} />
          </div>
        </section>
        <button
          onClick={() => {
            return handleDownloadPDF?.();
          }}
          className="fixed bottom-5 right-5 bg-red-600 text-white py-2 px-4 rounded shadow-md hover:bg-red-700 print:hidden"
        >
          Print / Save as PDF
        </button>
      </section>
    </>
  );
};

export default CV;
