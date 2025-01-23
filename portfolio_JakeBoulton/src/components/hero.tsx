import React from "react";
import { IoIosArrowDown } from "react-icons/io";

// interface HeroProps {
// image: string;
// }

// const Hero: React.FC<HeroProps> = ({ image }) => {
const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="[ hero ] [ relative w-full py-60 text-center text-white bg-black ]"
      // style={{
      //   backgroundImage: `url(${image})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "50% 20%",
      // }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>

      <div className="[ container ] [ relative z-10 mx-auto px-5 lg:px-40 text-white text-center ]">
        <div className="[ hero--paragraph ] [ flex justify-center ]">
          <h1 className="[ hero--title ] [ mb-5 text-5xl sm:text-8xl ]">
            Hi, I&apos;m Jake Boulton. Designer and problem solver.
          </h1>
        </div>
        <div className="[ hero--paragraph ] [ flex justify-center ]">
          <p className="[ w-[65ch] mt-5 text-gray-300 text-base md:text-lg lg:text-xl ]">
            Welcome to my portfolio! I&apos;m a freelance designer from Dunmow,
            UK, creating immersive, user-focused 3D experiences. Explore my work
            and ideas!
          </p>
        </div>
        <div className="mx-auto w-fit mt-5 p-2 border-2">
          <a
            href="#contact"
            className="[ hero--button ] [ text-base md:text-lg lg:text-xl uppercase ]"
          >
            ask me a question
          </a>
        </div>
      </div>
      {/* Arrow */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <IoIosArrowDown className="text-white text-3xl" />
      </div>
    </section>
  );
};

export default Hero;
