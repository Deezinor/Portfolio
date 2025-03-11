import React from "react";
import { LuLink } from "react-icons/lu";

interface AwardEntryProps {
  name: string;
  title: React.ReactNode;
  date: string;
  link?: string;
  summary: string;
}

const AwardEntry: React.FC<AwardEntryProps> = ({
  name,
  title,
  date,
  link,
  summary,
}) => {
  return (
    <div className="mt-5">
      <div className="flex flex-col md:flex-row md:justify-between gap-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm md:text-base font-medium md:font-semibold">
          {date}
        </p>
      </div>
      <h4>{title}</h4>
      {link && (
        <div className="flex flew-row items-center">
          <LuLink className="mr-2 text-sm text-red-600" />
          <a href={link} className="text-xs underline">
            {link}
          </a>
        </div>
      )}
      <p className="mt-2">{summary}</p>
    </div>
  );
};

export default AwardEntry;
