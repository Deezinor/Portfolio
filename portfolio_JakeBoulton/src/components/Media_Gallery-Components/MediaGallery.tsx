// src/components/MediaGallery.tsx
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

export type MediaItem = {
  type: "image" | "video" | "iframe" | "model";
  src: string;
  caption?: string;
};

export function MediaGallery({
  media,
  className = "",
}: {
  media: MediaItem[];
  className?: string;
}) {
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
  const next = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((i) => {
        return ((i ?? 0) + 1) % media.length;
      });
    }
  };
  const prev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((i) => {
        return ((i ?? 0) - 1 + media.length) % media.length;
      });
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      return document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const renderItem = (item: MediaItem, index: number) => {
    if (item.type === "image") {
      return (
        <img
          src={item.src}
          alt={`Media ${index + 1}`}
          className="w-full h-auto object-contain max-h-[600px]"
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
    // iframe
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
    <section className={className}>
      {media.length === 1 ? (
        <div className="w-full md:w-3/4 mx-auto mt-12 flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3">
            {renderItem(media[0], 0)}
          </div>
        </div>
      ) : (
        <div className="w-full md:w-3/4 mx-auto mt-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {media.map((item, index) => {
              const clickable = item.type === "image";
              return (
                <div
                  key={index}
                  className={`group relative mb-4 break-inside-avoid rounded-lg overflow-hidden
              hover:-translate-y-1 hover:shadow-md hover:shadow-gray-400 transition-transform duration-200 ${
                clickable ? "cursor-pointer" : ""
              }`}
                  onClick={() => {
                    return clickable && openModal(index);
                  }}
                >
                  <div className="max-h-[600px] overflow-hidden flex justify-center items-center">
                    {renderItem(item, index)}
                  </div>

                  {item.caption && (
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-3 py-2 
                   opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-300"
                    >
                      {item.caption}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {isOpen && selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/75 flex flex-col justify-center items-center z-50"
          {...swipeHandlers}
        >
          <IoIosCloseCircle
            className="absolute top-6 right-6 sm:top-10 sm:right-10 md:top-16 md:right-16 text-white text-4xl cursor-pointer"
            onClick={closeModal}
            aria-label="Close gallery"
          />
          <IoMdArrowDropleftCircle
            className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer"
            onClick={prev}
            aria-label="Previous image"
          />
          <img
            src={media[selectedIndex].src}
            alt={`Enlarged media ${selectedIndex + 1}`}
            className="max-w-[90vw] max-h-[80vh] object-contain"
          />
          <IoMdArrowDroprightCircle
            className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer"
            onClick={next}
            aria-label="Next image"
          />
        </div>
      )}
    </section>
  );
}
