import React from "react";
import { LuLink } from "react-icons/lu";

interface ListItem {
  item: string;
}

interface ExperienceEntryProp {
  name: string;
  role: string;
  dates: string;
  location: string;
  link?: string;
  description: ListItem[];
}

const ExperienceEntry: React.FC<ExperienceEntryProp> = ({
  name,
  role,
  dates,
  location,
  link,
  description,
}) => {
  return (
    <>
      <div className="mt-5">
        <div className="flex flex-col md:flex-row md:justify-between gap-1">
          <h3 className="font-semibold">{name}</h3>
          <h4 className="font-semibold">{dates}</h4>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-1">
          <h3>{role}</h3>
          <h4 className="text-sm">{location}</h4>
        </div>
        {link && (
          <div className="flex flex-row items-center">
            <LuLink className="mr-2 text-sm text-red-600" />
            <a className="text-sm italic underline" href={link}>
              {link}
            </a>
          </div>
        )}
        <ul className="flex flex-col gap-1 list-disc mt-4 ml-5">
          {description.map((listItem, idx) => {
            return <li key={idx}>{listItem.item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default ExperienceEntry;
