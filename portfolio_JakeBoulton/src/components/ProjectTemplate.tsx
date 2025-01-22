import React from "react";
import Header from "./header";

interface ProjectTemplateProps {
  title: string;
  projectDescription: React.ReactNode;
  roleTitle?: string;
  roleDescription: React.ReactNode;
  teamMembers?: React.ReactNode;
  images: string[];
  projectLogo: string;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  projectDescription,
  roleTitle,
  roleDescription,
  teamMembers,
  images,
  projectLogo,
}) => {
  return (
    <section>
      <Header />
      <div className="container mx-auto lg:px-20 flex flex-col items-center gap-6 lg:py-10 lg:flex-row lg:items-start">
        <div className="flex w-full justify-center lg:w-1/2">
          <img
            src={projectLogo}
            alt={`logo for ${title}`}
            className="p-3 h-auto max-w-full"
          />
        </div>

        <div className="px-4 lg:px-0 w-full lg:w-1/2">
          {/* Project Text */}
          <div>
            <h1 className="mb-6 text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
              Project Title: <br />
            </h1>
            <h4 className="mb-6 text-3xl font-normal text-nowrap sm:text-4xl lg:text-5xl">
              {title}
            </h4>
            <p className="mb-12 text-base text-gray-500 sm:text-xl">
              {projectDescription}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col lg:flew-row">
        <div className="lg:mx-20">
          {roleTitle && (
            <>
              <h3 className="mb-6 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                My Role: <br />
              </h3>
              <h4 className="mb-6 text-xl font-normal text-nowrap sm:text-2xl lg:text-3xl">
                {roleTitle}
              </h4>
              <p className="mb-12 text-base text-gray-500 sm:text-xl">
                {roleDescription}
              </p>
            </>
          )}
        </div>
        <div className="lg:mx-20">
          {teamMembers && (
            <>
              <h3 className="mb-6 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                Team:
              </h3>
              <p className="mb-12 text-base text-gray-500 sm:text-xl">
                {teamMembers}
              </p>
            </>
          )}
        </div>
      </div>
      <div>
        {/* Images */}
        <div className="grid grid-cols-1 gap-6 lg:gap-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="mx-auto h-auto w-full lg:w-3/4 bg-gray-200"
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
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
