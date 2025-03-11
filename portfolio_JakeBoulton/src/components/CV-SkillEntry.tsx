import React from "react";

interface SkillProps {
  skill: string;
  expertise: number;
  selfTaught?: boolean;
}

const SkillEntry: React.FC<SkillProps> = ({ skill, expertise, selfTaught }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* SKill Name */}
      <p className="text-base font-semibold">{skill}</p>

      {/* Expertise Level */}
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <div
              key={index}
              className={`w-3 h-3 border-2 rounded ${
                index < expertise
                  ? "bg-red-500 border-red-500"
                  : "border-red-500"
              }`}
            />
          );
        })}
      </div>
      {selfTaught && <p className="text-xs font-medium">self-taught</p>}
    </div>
  );
};

export default SkillEntry;
