import React from "react";
import Header from "../components/header";
import ExperienceEntry from "../components/CV-ExperienceEntry";
import EducationEntry from "../components/CV-EducationEntry";
import ProjectsEntry from "../components/CV-ProjectsEntry";
// import SkillEntry from "../components/CV-SkillEntry";
import ReferenceEntry from "../components/CV-Reference";

import { CiLocationOn, CiMobile1 } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import AwardEntry from "../components/CV-AwardsEntry";

const CV: React.FC = () => {
  const mobileNumber = "+44 7919 640 196";
  const email = "jboultonwork@gmail.com";

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
        heading: "Architectural Visualization (ArchViz)",
        paragraph:
          "Studying CGI lighting, composition, and photography to improve 3D visualization skills.",
      },
      {
        heading: "3D Software & Rendering",
        bullets: [
          "Learning 3DS Max & Corona Renderer for architectural visualization and CGI rendering.",
          "Developing Unreal Engine skills, focusing on XR applications and real-time rendering.",
        ],
      },
      {
        heading: "Technical & Professional Growth",
        bullets: [
          "Exploring human-centred design, spatial UX, and web development with React, TypeScript, and TailwindCSS.",
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
          "Planning lessons for both Theory and Practical sessions.",
          "Ensured a safe environment for student to explore their creative and technical passion.",
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
          "Researched new products, including manufacturing jigs and ventilation grillages, based on user requirements and industry needs.",
          "Designed jigs to enhance manufacturing, improving efficiency and reducing health risks for end users.",
          "Managed design and prototyping stages, integrating user feedback for refinement.",
          "Communicated designs using CAD and digital tools, ensuring clear understanding for stakeholders.",
          "Coordinated manufacturing and delivery of parts and materials, prioritizing seamless user implementation.",
          "Sourced information, guidelines, and standards, aligning new technologies with user and industry requirements.",
        ],
      },
    ],
  };
  const PowerCon = {
    name: "Power Construction Hertz Ltd",
    role: "3D Visualiser & Labourer",
    dates: "June 2016 - September 2023",
    location: "Dunmow, Essex, UK",
    description: [
      {
        bullets: [
          "The position was held on holidays, while at university, with a break in employment from 2021-22 while teaching at Felsted and on a ski instructor course. Employment ended when I started my Master’s in September 2023",
          "This role included setting up sites for skilled workers such as carpenters and bricklayers. Alongside this, I would aid them in their daily tasks and help clean up throughout and at the end of the day.",
          "Driving a tipper lorry was also part of my responsibilities. This required me to load waste material for disposal, pick up and deliver materials to the site and deliver tools.",
        ],
      },
    ],
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
  const GoFish = {
    name: "Go Fish MR",
    description: "Mixed Reality Card Game",
    dates: "September 2024",
    summary: (
      <>
        <ul className="list-disc ml-5 mt-2 flex flex-col gap-1 text-sm">
          <li>
            Created and refined 3D assets and environments, ensuring smooth
            real-time interaction in a multiplayer MR setting.
          </li>
          <li>
            Designed immersive spatial interfaces and game mechanics, optimizing
            for performance and user engagement.
          </li>
        </ul>
      </>
    ),
    tags: [
      { tag: "MR" },
      { tag: "XR Design" },
      { tag: "Unity" },
      { tag: "Game" },
      { tag: "Multiplayer" },
      { tag: "Game Design" },
    ],
  };
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
  const Sylvia = {
    name: "Sylvia Pan",
    job: "University Lecturer and Thesis supervisor",
    email: "X.Pan@gold.ac.uk",
  };

  return (
    <>
      <Header />
      <section className="container mx-auto">
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
              <h2>UX/UI, XR Designer & 3D Artist</h2>
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
            A passionate and skilled 3D Artist & XR Designer with a strong
            foundation in 3D modelling, texturing, shading, lighting, and
            rendering. Experience spans across XR applications, real-time
            environments, and immersive experiences. Adept at problem-solving in
            creative and technical spaces, with a keen eye for detail and
            composition. Looking to bring expertise in 3D design and interactive
            experiences into a VFX pipeline setting.
          </p>
        </section>

        {/* Experience */}
        <section className="flex flex-col md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="text-xl text-red-600 font-medium">Experience</h2>
          <ExperienceEntry {...ProfessionalDevelopment} />
          <ExperienceEntry {...Felsted} />
          <ExperienceEntry {...FlexiGroup} />
          <ExperienceEntry {...PowerCon} />
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
          <ProjectsEntry {...BeatBox} />
          <ProjectsEntry {...Midnight} />
          <ProjectsEntry {...Habibi} />
          <ProjectsEntry {...GoFish} />
        </section>

        {/* Skills */}
        <section className="flex flex-col md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="my-3 text-xl text-red-600 font-medium">Skills</h2>
          <div className="grid grid-cols-2 gap-5">
            {/* <SkillEntry skill="Unity" expertise={4} />
            <SkillEntry skill="C++" expertise={4} />
            <SkillEntry skill="C#" expertise={4} />
            <SkillEntry skill="Git" expertise={4} />
            <SkillEntry skill="Source Control" expertise={4} />
            <SkillEntry skill="Blender" expertise={4} selfTaught />
            <SkillEntry skill="DaVinci Resolve" expertise={2} selfTaught />
            <SkillEntry skill="Maya" expertise={3} />
            <SkillEntry skill="Figma" expertise={3} selfTaught />
            <SkillEntry skill="Adobe Photoshop" expertise={3} />
            <SkillEntry skill="Adobe Illustrator" expertise={3} />
            <SkillEntry skill="Adobe InDesign" expertise={4} />
            <SkillEntry skill="React" expertise={3} selfTaught />
            <SkillEntry skill="Vite" expertise={3} selfTaught />
            <SkillEntry skill="SASS/SCSS" expertise={4} selfTaught />
            <SkillEntry skill="CSS" expertise={4} selfTaught />
            <SkillEntry skill="HTML5" expertise={4} selfTaught />
            <SkillEntry skill="JavaScript" expertise={2} selfTaught />
            <SkillEntry skill="Rhino 3D" expertise={3} />
            <SkillEntry skill="SolidWorks" expertise={4} />
            <SkillEntry skill="KeyShot 9" expertise={4} selfTaught /> */}
            <ul className="list-disc ml-5 mt-2 flex flex-col gap-1">
              <li>
                <span className="font-medium">3D Modelling & Texturing:</span>{" "}
                Proficient in creating high-quality assets for real-time and
                rendered environments.
              </li>
              <li>
                <span className="font-medium">Shading & Look Development:</span>{" "}
                Experience in setting up shaders and materials for realistic and
                stylized aesthetics.
              </li>
              <li>
                <span className="font-medium">Lighting & Rendering:</span>{" "}
                Understanding of lighting principles and rendering techniques
                for both real-time and pre-rendered workflows.
              </li>
              <li>
                <span className="font-medium">
                  Scene Assembly & Optimization:
                </span>{" "}
                Experience in assembling complex 3D environments while ensuring
                optimal performance.
              </li>
            </ul>
            <ul className="list-disc ml-5 mt-2 flex flex-col gap-1">
              <li>
                <span className="font-medium">Compositing & Refinement:</span>{" "}
                Basic knowledge of 2D compositing techniques for final render
                polish.
              </li>
              <li>
                <span className="font-medium">Programming & Scripting:</span>{" "}
                Comfortable with Python and MEL scripting for automation and
                workflow improvements.
              </li>
              <li>
                <span className="font-medium">Software Proficiency:</span> 3DS
                Max, Corona Renderer, Unreal Engine, Unity, Blender, Houdini
                (learning), Maya (familiar with).
              </li>
              <li>
                <span className="font-medium">
                  Artistic & Technical Knowledge:
                </span>{" "}
                Strong understanding of form, composition, lighting, and spatial
                UX principles.
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

        {/* References */}
        <section className="flex flex-col md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="my-3 text-xl text-red-600 font-medium">References</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ReferenceEntry {...Shaun} />
            <ReferenceEntry {...Dave} />
            <ReferenceEntry {...Sylvia} />
          </div>
        </section>
      </section>
    </>
  );
};

export default CV;
