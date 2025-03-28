import React from "react";
import Header from "../components/header";
import ExperienceEntry from "../components/CV-ExperienceEntry";
import EducationEntry from "../components/CV-EducationEntry";
import ProjectsEntry from "../components/CV-ProjectsEntry";
import SkillEntry from "../components/CV-SkillEntry";
import ReferenceEntry from "../components/CV-Reference";

import { CiLocationOn, CiMobile1 } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import AwardEntry from "../components/CV-AwardsEntry";

const CV: React.FC = () => {
  const mobileNumber = "+44 7919 640 196";
  const email = "jboultonwork@gmail.com";

  const Felsted = {
    name: "Felsted School",
    role: "Design & Technology Maternity Cover Teacher",
    dates: "February 2021 - July 2021",
    location: "Felsted, Essex, UK",
    link: "https://www.felsted.org/",
    description: [
      {
        item: "Taught students aged 13 - 18, including GCSE, A-level, and International Baccalaureate (IB).",
      },
      {
        item: "Planning lessons for both Theory and Practical sessions.",
      },
      {
        item: "Ensured a safe environment for student to explore their creative and technical passion.",
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
        item: " Product & Process Research: Manufacture Jigs & Tools, Ventilation grillages, and Balcony manufacture and assembly.",
      },
      {
        item: "Managed design and prototyping stages, integrating user feedback for refinement.",
      },
      {
        item: "Communicated designs using CAD and digital tools, for stakeholder understanding.",
      },
      {
        item: "Coordinated manufacture and delivery of parts and materials.",
      },
      {
        item: "Sourced information, guidelines, and standards, aligning new technologies with user and industry requirements.",
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
        item: "Created visual mock-ups for domestic small builds (extensions and renovations) to support client communication and presentations.",
      },
      {
        item: "Assisted in developing clear and compelling visual concepts for project proposals.",
      },
      {
        item: "Set up construction sites for skilled workers (carpenters and bricklayers).",
      },
      { item: "Assisted with daily tasks and site maintenance." },
      {
        item: "Operated tipper lorry to transport waste, materials, and tools.",
      },
      {
        item: "Worked during university holidays with a break from 2021 to 2022. (teaching at Felsted and completing a ski instructor course)",
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
    summary:
      "Lead UI/UX designer for a real-time VR drumming simulation game, focusing on intuitive and immersive interfaces for enhanced user engagement.",
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
        <p>
          Designed and implemented the UX/UI for an award-winning digital
          heritage exhibition using AR/VR to bring historical experiences to
          life for international audiences.
        </p>
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
        UX/UI designer for a utility and design-focused AR app, recognized at XR
        Hack Istanbul, enhancing user interaction through innovative immersive
        solutions.
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
    summary:
      "Designed and implemented intuitive user interfaces and engaging visuals to enhance the player experience. Focused on optimizing usability, accessibility, and visual appeal to create an immersive and seamless interaction flow. Collaborated with developers and designers to refine game mechanics and ensure a cohesive aesthetic and user-friendly experience.",
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
        {/* <section className="flex flex-wrap justify-between items-center md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="text-xl text-red-600 font-medium">Summary</h2>
          <p>
            Award-winning immersive designer with a proven track record of
            creating intuitive and engaging 3D experiences for XR applications.
            Skilled in leveraging real-time game platforms, spatial design
            principles, and architectural understanding to craft user-centric
            environments that enhance navigation and interaction. Passionate
            about designing seamless, functional, and visually compelling spaces
            that bridge the gap between users and technology.
          </p>
        </section> */}

        {/* Experience */}
        <section className="flex flex-col md:max-w-screen-md mx-auto my-5 px-5">
          <h2 className="text-xl text-red-600 font-medium">Experience</h2>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            <SkillEntry skill="Unity" expertise={4} />
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
            <SkillEntry skill="KeyShot 9" expertise={4} selfTaught />
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
