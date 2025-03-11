import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import Header from "./header";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

interface MediaItem {
  type: "image" | "video" | "iframe";
  src: string;
}

interface ProjectTemplateProps {
  title: string;
  projectDescription: React.ReactNode;
  roleTitle?: string;
  roleDescription?: React.ReactNode;
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => {
        return (prevIndex! + 1) % media.length;
      });
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => {
        return (prevIndex! - 1 + media.length) % media.length;
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      } else if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      return document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  return (
    <>
      <Header />
      <section className="container mx-auto md:mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:w-3/4">
        <div className="flex w-full lg:w-1/2">
          <img
            src={projectLogo}
            alt={`logo for ${title}`}
            className="h-auto max-w-full rounded-lg"
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
        <div className="flex flex-wrap justify-center items-center w-full md:w-3/4 mx-auto mt-12 gap-4">
          {media.map((item, index) => {
            const [imageSize, setImageSize] = useState<{
              width: number;
              height: number;
            } | null>(null);

            useEffect(() => {
              if (item.type === "image") {
                const img = new Image();
                img.src = item.src;
                img.onload = () => {
                  setImageSize({
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                  });
                };
              }
            }, [item.src]);

            return (
              <div
                key={index}
                className="flex flex-1 justify-center items-center cursor-pointer"
                style={{
                  flexGrow: 1,
                  flexBasis: imageSize
                    ? imageSize.width > imageSize.height
                      ? "45%"
                      : "30%"
                    : "30%",
                  minWidth: "150px",
                  maxWidth: "400px",
                }}
                onClick={() => {
                  return item.type === "image" && openModal(index);
                }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Media ${index + 1}`}
                    className="w-full h-auto object-cover"
                    style={{
                      aspectRatio: imageSize
                        ? `${imageSize.width} / ${imageSize.height}`
                        : "1 / 1",
                      borderRadius: "8px",
                    }}
                  />
                ) : item.type === "video" ? (
                  <video controls className="w-full h-auto object-contain">
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
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

      {/* Lightbox Modal with Navigation */}
      {isOpen && selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50"
          {...swipeHandlers}
        >
          {/* Close Button */}
          <IoIosCloseCircle
            className="absolute top-36 right-36 text-white text-4xl cursor-pointer"
            onClick={closeModal}
          />

          {/* Left Arrow Button (Hidden on small screens) */}
          <IoMdArrowDropleftCircle
            className="hidden lg:flex absolute left-16 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer"
            onClick={prevImage}
          />

          {/* Image Display */}
          <img
            src={media[selectedIndex].src}
            alt="Enlarged media"
            className="max-w-[90vw] max-h-[80vh] object-contain"
          />

          {/* Right Arrow Button (Hidden on small screens) */}
          <IoMdArrowDroprightCircle
            className="hidden lg:flex absolute right-16 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer"
            onClick={nextImage}
          />
        </div>
      )}
    </>
  );
};

export default ProjectTemplate;
