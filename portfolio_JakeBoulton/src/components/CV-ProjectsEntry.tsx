import React from "react";

interface Tags {
  tag: string;
}

interface ProjectEntryProps {
  name: string;
  award?: string;
  description?: string;
  dates: string;
  summary: React.ReactNode;
  tags?: Tags[];
}

const tagColors: { [key: string]: string } = {
  VR: "text-blue-600",
  AR: "text-red-600",
  MR: "text-indigo-600",
  "XR Design": "text-yellow-600",
  "Award Winning": "text-teal-600",
  "Cultural Heritage": "text-emerald-600",
  Experience: "text-purple-600",
  Unity: "text-orange-600",
  Education: "text-sky-600",
  Game: "text-pink-600",
  "Music Technology": "text-rose-600",
  "Interactive Media": "text-cyan-600",
  "Social Connection": "text-lime-600",
  "Digital Heritage": "text-green-600",
  "Remote Collaboration": "text-amber-600",
  "AI Integration": "text-fuchsia-600",
  "UX/UI": "text-stone-600",
  "Web Development": "text-gray-700",
  Communication: "text-violet-600",
  "Meta Quest": "text-slate-600",
  "Immersive Experience": "text-stone-600",
  Gamification: "text-emerald-600",
  "Education Tech": "text-indigo-600",
  Multiplayer: "text-yellow-600",
  Networking: "text-teal-600",
  "3D Graphics": "text-blue-600",
  "Game Design": "text-orange-600",
  "Human-Centered Design": "text-purple-600",
  "3D Modelling": "text-pink-600",
  ArchViz: "text-red-600",
  Blender: "text-orange-500",
  Rendering: "text-yellow-500",
  Lighting: "text-green-500",
  Interior: "text-blue-500",
};

const getTagColor = (tag: string) => {
  return tagColors[tag] || "text-gray-500"; // Default color if tag isn't predefined
};

const ProjectsEntry: React.FC<ProjectEntryProps> = ({
  name,
  award,
  description,
  dates,
  summary,
  tags,
}) => {
  return (
    <>
      <div className="mt-5">
        <div className="flex flex-col md:flex-row md:justify-between gap-1">
          <h3 className="font-semibold">{name}</h3>
          <h4 className="text-sm md:text-base font-medium md:font-semibold">
            {dates}
          </h4>
        </div>
        <div className="font-medium">{award}</div>
        {description && (
          <div className="flex flex-col md:flex-row md:justify-between gap-1">
            <h3>{description}</h3>
          </div>
        )}
        <p className="mt-2">{summary}</p>
        {tags && tags.length > 0 && (
          <div className="flex gap-1">
            {tags.map((tag, idx) => {
              return (
                <div className={`text-xs ${getTagColor(tag.tag)}`} key={idx}>
                  {tag.tag}
                  {idx < tags.length - 1 && ", "}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsEntry;
