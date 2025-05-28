import React from "react";

interface EducationEntryProp {
  name: string;
  title: string;
  dates: string;
  result: string;
  degreeType: string;
}

const EducationEntry: React.FC<EducationEntryProp> = ({
  name,
  title,
  dates,
  result,
  degreeType,
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
        <div className="flex flex-col md:flex-row md:justify-between gap-1">
          <h3>{title}</h3>
          <h4 className="text-sm">{degreeType}</h4>
        </div>
        <p className="mt-2">{result}</p>
      </div>
    </>
  );
};

export default EducationEntry;
