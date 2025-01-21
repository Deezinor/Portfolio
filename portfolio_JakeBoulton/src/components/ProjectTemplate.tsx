import React from "react";

interface ProjectTemplateProps {
  title: string;
  projectDescription: string;
  roleTitle: string;
  roleDescription: string;
  teamMembers?: string;
  images: string[];
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  projectDescription,
  roleTitle,
  roleDescription,
  teamMembers,
  images,
}) => {
  return (
    <section className="[ container ] [ mx-auto px-4 py-10 ]">
      {/* Porject Text */}
      <h1 className="[ mb-4 ][ text-4xl sm:text-5xl lg:text-6xl font-bold uppercase ]">
        Project Title: <span className="font-normal">{title}</span>
      </h1>
      <p className="[ mb-6 ][ text-base sm:text-xl text-gray-500 ]">
        {projectDescription}
      </p>
      <h3 className="[ mb-4 ][ text-2xl sm:text-3xl lg:text-4xl font-bold uppercase ]">
        My Role: <span className="font-normal">{roleTitle}</span>
      </h3>
      <p className="[ mb-6 ][ text-base sm:text-xl text-gray-500 ]">
        {roleDescription}
      </p>
      {teamMembers && (
        <>
          <h3 className="[ mb-4 ][ text-2xl sm:text-3xl lg:text-4xl font-bold uppercase ]">
            Team:
          </h3>
          <p className="[ mb-6 ][ text-base sm:text-xl text-gray-500 ]">
            {teamMembers}
          </p>
        </>
      )}

      {/* Images */}
      <div className="[ grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ]">
        {images.map((image, index) => (
          <div key={index} className="[ w-full h-64 ] [ bg-gray-200 ]">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="[ w-full h-full object-cover ]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectTemplate;
