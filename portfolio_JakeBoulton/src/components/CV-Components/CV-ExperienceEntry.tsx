import React from "react";
import { LuLink } from "react-icons/lu";

interface DescriptionSection {
  heading?: string;
  paragraph?: string;
  bullets?: string[];
}

interface ExperienceEntryProp {
  name: string;
  role: string;
  dates: string;
  location: string;
  link?: string;
  description?: DescriptionSection[];
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
          <h3 className="font-semibold text-lg">{name}</h3>
          <h4 className="font-medium">{dates}</h4>
        </div>
        <div className="flex flex-col text-sm font-light md:flex-row md:justify-between gap-1">
          <h3>{role}</h3>
          <h4>{location}</h4>
        </div>
        {link && (
          <div className="flex flex-row items-center">
            <LuLink className="mr-2 text-sm text-red-600" />
            <a className="text-sm italic underline" href={link}>
              {link}
            </a>
          </div>
        )}

        {/* Render flexible content: headings, paragraphs, and bullet lists */}
        <div className="mt-4 flex flex-col gap-3">
          {description &&
            description.map((section, index) => {
              return (
                <div key={index}>
                  {section.heading && (
                    <h5 className="font-normal">{section.heading}</h5>
                  )}
                  {section.paragraph && (
                    <p className="mt-0 text-sm">{section.paragraph}</p>
                  )}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-disc ml-5 mt-2 flex flex-col gap-1 text-sm">
                      {section.bullets.map((item, idx) => {
                        return <li key={idx}>{item}</li>;
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ExperienceEntry;
