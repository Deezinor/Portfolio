import React from "react";

interface ReferenceProps {
  name: string;
  job: string;
  phone?: string;
  email?: string;
}

const ReferenceEntry: React.FC<ReferenceProps> = ({
  name,
  job,
  phone,
  email,
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-base">{job}</p>
      <div className="flex flex-col text-sm">
        {phone && <p>{phone}</p>}
        {email && (
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
        )}
      </div>
    </div>
  );
};

export default ReferenceEntry;
