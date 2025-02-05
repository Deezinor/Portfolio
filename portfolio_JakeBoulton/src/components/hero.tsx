import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full py-60 text-center text-white bg-black"
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
          <p className="w-[65ch] mt-5 text-base text-gray-300 md:text-lg lg:text-xl">
            Welcome to my portfolio! I&apos;m a freelance designer from Dunmow,
            UK, creating immersive, user-focused 3D experiences. Explore my work
            and ideas!
          </p>
        </div>
        <div className="mx-auto mt-5">
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="button button--black-on-white text-base uppercase md:text-lg lg:text-xl"
          >
            ask me a question
          </button>
        </div>
      </div>
      {/* Arrow */}
      <div className="absolute bottom-5 left-1/2 z-10 transform -translate-x-1/2">
        <IoIosArrowDown className="text-3xl text-white" />
      </div>
    </section>
  );
};

export default Hero;
