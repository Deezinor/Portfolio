// src/components/Galley-Components/galleryCard.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface GalleryCardProps {
  image: string;
  title?: string;
  description?: string;
  bgColor: string;
  link: string;
  extraClasses?: string;
  revealDelayMs?: number;
  disableAnimation?: boolean; // NEW
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  image,
  title,
  description,
  extraClasses,
  link,
  bgColor,
  revealDelayMs = 0,
  disableAnimation = false, // NEW
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disableAnimation) {
      setIsVisible(true); // instantly visible
      return;
    }
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => {
      return observer.disconnect();
    };
  }, [disableAnimation]);

  return (
    <Link to={link} className="block">
      <div
        ref={cardRef}
        style={{
          animationDelay: `${revealDelayMs}ms, ${revealDelayMs}ms`,
        }}
        className={clsx(
          "group relative mx-auto w-full aspect-[16/9] overflow-hidden rounded-lg",
          bgColor,
          !disableAnimation && !isVisible && "opacity-0 translate-y-10",
          !disableAnimation && isVisible && "animate-card-in",
        )}
      >
        {/* Image */}
        <div
          className={clsx(
            "absolute inset-0 bg-center bg-no-repeat transition-transform duration-300 motion-reduce:transition-none motion-reduce:transform-none group-hover:scale-[1.02]",
            extraClasses,
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Overlay */}
        <div className="hidden md:flex pointer-events-none absolute inset-0 flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <h3 className="text-2xl font-bold text-white drop-shadow-sm leading-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
            {description}
          </p>
        </div>
      </div>
      {/* Mobile text */}
      <div className="mx-auto text-center lg:hidden">
        <h3 className="mt-4 text-lg font-bold">{title}</h3>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default GalleryCard;
