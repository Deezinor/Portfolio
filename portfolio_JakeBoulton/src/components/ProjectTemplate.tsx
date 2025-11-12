/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

// ===== External components =====
import Header from "./Header-Components/header";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import clsx from "clsx";

// ===== Custom components =====
import ModelViewer from "./ModelViewer/ModelViewer";
import DebugViewer from "./ModelViewer/DebugViewer";
import type { MediaItem, ImageItem } from "../types/media";
import { div } from "three/tsl";


interface ProjectTemplateProps {
  title: string;
  projectDescription: React.ReactNode;
  roleTitle?: string;
  roleDescription?: React.ReactNode;
  teamMembers?: React.ReactNode;
  projectBrief?: React.ReactNode;
  media: MediaItem[];
  projectLogo: string;
  backgroundBoolean?: string;
  awards?: React.ReactNode;
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
  backgroundBoolean,
  awards,
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
      setSelectedIndex((prevIndex) => (prevIndex! + 1) % media.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (prevIndex) => (prevIndex! - 1 + media.length) % media.length
      );
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      else if (event.key === "ArrowRight") nextImage();
      else if (event.key === "ArrowLeft") prevImage();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Render a model when item.type === "model"
  const renderMediaContent = (item: MediaItem, index: number) => {
    if (item.type === "image") {
      return (
        <img
          src={item.src}
          alt={`Media ${index + 1}`}
          className="w-full h-auto object-cover block"
          loading="lazy"
        />
      );
    }

    if (item.type === "video") {
      return (
        <video controls className="w-full h-auto block">
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    if (item.type === "model") {
      return (
        <div className={item.tailwindHeightClass ?? "w-full h-[60vh]"}>
          <ModelViewer
            src={item.src}
            envPreset={item.envPreset ?? "city"}
            autoRotate={item.autoRotate ?? false}
            className="w-full h-full rounded-lg"
          />
        </div>
        // <div className={item.tailwindHeightClass ?? "w-full h-[60vh]"}><DebugViewer /></div>
      );
    }

    // iframe — keep the 16:9 wrapper
    return (
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={item.src}
          className="absolute inset-0 w-full h-full block"
          style={{ border: "none" }}
          allowFullScreen
          title={`Embedded Content ${index + 1}`}
        />
      </div>
    );
  };

  return (
    <>
      <Header />

      {/* Intro: Logo + Description */}
      <section className="container mx-auto md:mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:w-3/4">
        <div className="flex w-full lg:w-1/2 justify-center">
          <img
            src={projectLogo}
            alt={`logo for ${title}`}
            className={clsx(
              "h-auto max-h-[50vh] max-w-full rounded-lg",
              backgroundBoolean
            )}
          />
        </div>

        <div className="px-4 md:px-0 lg:w-1/2 justify-center">
          <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mb-8 text-base text-gray-500 sm:text-xl">
            {projectDescription}
          </div>
        </div>
      </section>

      {/* Role, Brief & Team */}
      <section className="container mx-auto md:gap-6 lg:flex-row lg:w-3/4">
        <div className="flex flex-col px-4 md:px-0">
          {roleTitle && (
            <>
              <h3 className="mb-2 w-full text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                ROLE: {roleTitle}
              </h3>
              <div className="mb-8 w-full text-base text-gray-500 sm:text-xl">
                {roleDescription}
              </div>
            </>
          )}
        </div>

        <div className="px-4 md:px-0">
          {projectBrief && (
            <>
              <h3 className="mb-1 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                Project Brief
              </h3>
              <p className="mb-8 text-base text-gray-500 sm:text-xl">
                {projectBrief}
              </p>
            </>
          )}
        </div>

        <div className="px-4 md:px-0">
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

        <div className="px-4 md:px-0">
          {awards && (
            <>
              <h3 className="mb-1 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                Awards & Recognition:
              </h3>
              <p>{awards}</p>
            </>
          )}
        </div>
      </section>

      {/* Media (Single centres; Multiple = masonry/bento via CSS columns) */}
      <section className="section">
        {media.length === 1 ? (
          <div className="w-full md:w-3/4 mx-auto mt-12 flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3">
              {renderMediaContent(media[0], 0)}
            </div>
          </div>
        ) : (
          <div className="w-full md:w-3/4 mx-auto mt-12">
            {/* Masonry columns */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {media.map((item, index) => {
                const clickable = item.type === "image";
                return (
                  <div
                    key={index}
                    className={`mb-4 break-inside-avoid rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-md hover:shadow-gray-400 ${
                      clickable ? "cursor-pointer" : ""
                    }`}
                    onClick={() => clickable && openModal(index)}
                  >
                    {renderMediaContent(item, index)}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Lightbox Modal with Navigation (images only) */}
      {isOpen &&
        selectedIndex !== null &&
        media[selectedIndex]?.type === "image" && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50"
            {...swipeHandlers}
          >
            <IoIosCloseCircle
              className="absolute top-6 right-6 sm:top-10 sm:right-10 md:top-16 md:right-16 text-white text-4xl cursor-pointer"
              onClick={closeModal}
            />

            <IoMdArrowDropleftCircle
              className="hidden lg:flex absolute left-10 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer"
              onClick={prevImage}
            />

            <img
              src={(media[selectedIndex] as ImageItem).src}
              alt="Enlarged media"
              className="max-w-[90vw] max-h-[80vh] object-contain"
            />

            <IoMdArrowDroprightCircle
              className="hidden lg:flex absolute right-10 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer"
              onClick={nextImage}
            />
          </div>
        )}
    </>
  );
};

export default ProjectTemplate;
