import React from "react";
import Header from "./header";

interface ProjectTemplateProps {
  title: string;
  projectDescription: React.ReactNode;
  roleTitle?: string;
  roleDescription: React.ReactNode;
  teamMembers?: React.ReactNode;
  projectBrief?: React.ReactNode;
  images: string[];
  projectLogo: string;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  projectDescription,
  roleTitle,
  roleDescription,
  teamMembers,
  projectBrief,
  images,
  projectLogo,
}) => {
  return (
    <section>
      <Header />
      <div className="container mx-auto md:mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:w-3/4">
        <div className="flex w-full lg:w-1/2">
          <img
            src={projectLogo}
            alt={`logo for ${title}`}
            className="h-auto max-w-full"
          />
        </div>

        {/* Project */}
        {/* <div className="container mx-auto md:px-0 w-full lg:w-1/2"> */}
        <div className="px-4 md:px-0 lg:w-1/2">
          {/* Project Text */}
          <div className="">
            <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
              Project Title: <br />
            </h1>
            <h4 className="mb-1 text-3xl font-normal text-nowrap sm:text-4xl lg:text-5xl">
              {title}
            </h4>
            <p className="mb-8 text-base text-gray-500 sm:text-xl">
              {projectDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Role, Biref & Team */}
      <div className="container mx-auto flex flex-col md:gap-6 lg:flex-row lg:w-3/4">
        {/* Role */}
        <div className="px-4 md:px-0 lg:w-1/2">
          {roleTitle && (
            <>
              <h3 className="mb-2 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                My Role:
              </h3>
              <h4 className="mb-1 text-xl font-medium text-nowrap sm:text-2xl lg:text-3xl">
                {roleTitle}
              </h4>
              <p className="mb-8 text-base text-gray-500 sm:text-xl">
                {roleDescription}
              </p>
            </>
          )}
        </div>
        {/* Brief */}
        <div className="px-4 md:px-0 lg:w-1/2">
          {projectBrief && (
            <>
              <h3 className="mb-1 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                Project Brief:
              </h3>
              <p className="mb-8 text-base text-gray-500 sm:text-xl">
                {projectBrief}
              </p>
            </>
          )}
          {/* Team */}
          <div>
            {teamMembers && (
              <>
                <h3 className="mb-1 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                  Team:
                </h3>
                <p className="mb-8 text-base text-gray-500 sm:text-xl">
                  {teamMembers}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        {/* Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-3/4 gap-6 mx-auto mt-12">
          {images.map((image, index) => {
            return (
              <div key={index} className="mx-auto h-auto w-full bg-gray-200">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <p className="text-center text-gray-600">
          &copy; 2024 Jake Boulton. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default ProjectTemplate;
