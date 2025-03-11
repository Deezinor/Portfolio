import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen py-24 text-center text-white bg-black"
      // style={{
      //   backgroundImage: `url(${image})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "50% 20%",
      // }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>

      <div className="relative z-10 mx-auto px-5 lg:px-40 text-center text-white">
        <div className="flex justify-center">
          <h1 className="mb-5 text-5xl sm:text-8xl">
            Hi, I&apos;m Jake Boulton. <br /> Designer and problem solver.
          </h1>
        </div>
        <div className="flex justify-center">
          <img
            src="./Assets/Images/Jake_Boulton.JPG"
            alt="Jake Boulton wearing a graduation cap & gown and a blue suit."
            className="h-96 rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <p className="w-[65ch] mt-5 text-base text-gray-300 md:text-lg lg:text-xl">
            Welcome to my portfolio! I&apos;m a designer from Dunmow, UK,
            creating immersive, user-focused 3D experiences. Explore my work and
            ideas!
          </p>
        </div>
        <div className="mx-auto mt-5">
          <Link
            to="/contact"
            className="button button--black-on-white text-base uppercase md:text-lg lg:text-xl"
          >
            ask me a question
          </Link>
        </div>
      </div>
      {/* Arrow */}
      <button
        onClick={() => {
          const headerElement = document.getElementById("header");
          if (headerElement) {
            const offset = 100; // Adjust this value to control how far off the top it stops
            const elementPosition =
              headerElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }}
        className="absolute bottom-5 left-1/2 z-10 transform -translate-x-1/2"
      >
        <IoIosArrowDown className="text-3xl text-white" />
      </button>
    </section>
  );
};

export default Hero;
