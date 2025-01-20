import React from "react";
import clsx from "clsx";

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
  bgColor: string;
  extraClasses?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  image,
  title,
  description,
  extraClasses,
  bgColor,
}) => {
  return (
    <div>
      <div
        className={clsx(
          "relative mx-auto w-full h-[400px] overflow-hidden group",
          bgColor
        )}
      >
        <div
          className={clsx("w-full h-full bg-center bg-no-repeat", extraClasses)}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 ease-in-out">
          <div className="m-4 flex flex-col h-full">
            <h3 className="text-[2rem] font-bold text-white opacity-0 group-hover:opacity-100">
              {title}
            </h3>
            <p className="text-base text-white opacity-0 group-hover:opacity-100">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Small screen text */}
      <div className="mx-auto text-center lg:hidden">
        <h3 className="text-lg font-bold mt-4">{title}</h3>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
