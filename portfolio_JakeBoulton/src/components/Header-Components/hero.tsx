import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full py-16 md:py-24 text-center text-white bg-black"
    >
      <div className="container mx-auto px-5 lg:px-20">
        <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
          Hi, I&apos;m Jake Boulton. <br /> 3D Artist, XR Designer and Problem
          Solver.
        </h1>

        {/* Image */}
        <div className="flex justify-center mb-8">
          <img
            src="./Assets/Images/Jake_Boulton.JPG"
            alt="Jake Boulton wearing a graduation cap & gown and a blue suit."
            className="h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg object-cover"
          />
        </div>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-muted text-base sm:text-lg md:text-xl">
          I design User-Centred XR Experiences and Create & Optimise 3D Assets —
          from VR Applications to Interactive Visualisations and Archviz.
        </p>

        {/* Call to Action Button */}
        <div className="mt-8">
          <Link
            to="/projects"
            className="button button--accent text-base uppercase md:text-lg lg:text-xl"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Scroll Arrow */}
      <button
        onClick={() => {
          const galleryElement = document.getElementById("gallery");
          if (galleryElement) {
            const headerHeight =
              document.getElementById("header")?.offsetHeight || 0;
            const y =
              galleryElement.getBoundingClientRect().top +
              window.scrollY -
              headerHeight;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
      >
        <IoIosArrowDown className="text-3xl text-white" />
      </button>
    </section>
  );
};

export default Hero;
