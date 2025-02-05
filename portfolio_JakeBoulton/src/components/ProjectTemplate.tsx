import React from "react";
import Header from "./header";

interface MediaItem {
  type: "image" | "video" | "iframe";
  src: string;
}

interface ProjectTemplateProps {
  title: string;
  projectDescription: React.ReactNode;
  roleTitle?: string;
  roleDescription: React.ReactNode;
  teamMembers?: React.ReactNode;
  projectBrief?: React.ReactNode;
  media: MediaItem[];
  projectLogo: string;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  projectDescription,
  roleTitle,
  roleDescription,
  teamMembers,
  projectBrief,
  media,
  projectLogo,
}) => {
  return (
    <>
      <Header />
      <section className="container mx-auto md:mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:w-3/4">
        <div className="flex w-full lg:w-1/2">
          <img
            src={projectLogo}
            alt={`logo for ${title}`}
            className="h-auto max-w-full"
          />
        </div>

        {/* Project Description */}
        <div className="px-4 md:px-0 lg:w-1/2">
          <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mb-8 text-base text-gray-500 sm:text-xl">
            {projectDescription}
          </div>
        </div>
      </section>

      {/* Role, Brief & Team */}
      <section className="container mx-auto flex flex-col md:gap-6 lg:flex-row lg:w-3/4">
        <div className="px-4 md:px-0 lg:w-1/2">
          {roleTitle && (
            <>
              <h3 className="mb-2 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                ROLE: {roleTitle}
              </h3>
              <div className="mb-8 text-base text-gray-500 sm:text-xl">
                {roleDescription}
              </div>
            </>
          )}
        </div>
        <div className="px-4 md:px-0 lg:w-1/2">
          {projectBrief && (
            <>
              <h3 className="mb-1 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                {projectBrief}
              </h3>
            </>
          )}
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
      </section>

      {/* Media Grid (Images, Videos & Iframes) */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-3/4 gap-6 mx-auto mt-12">
          {media.map((item, index) => {
            return (
              <div
                key={index}
                className="mx-auto h-auto max-h-[50dvh] w-full bg-gray-100 flex justify-center items-center"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Media ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                ) : item.type === "video" ? (
                  <video controls className="h-full w-full object-contain">
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  // Handle iframe inside the grid
                  <iframe
                    src={item.src}
                    width="100%"
                    height="100%"
                    className="aspect-video"
                    style={{ border: "none" }}
                    allowFullScreen
                    title={`Embedded Content ${index + 1}`}
                  ></iframe>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectTemplate;
