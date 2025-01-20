import React from "react";
import Gallery from "../components/gallery";
import Header from "../components/header";
import Hero from "../components/hero";
import { FaArrowUpLong } from "react-icons/fa6";

const Home: React.FC = () => {
  const heroImage = "src/Assets/Images/Jake_Boulton.JPG";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-barlow">
      <Hero image={heroImage} />
      <Header />
      <Gallery />

      <section className="container mx-auto text-center text-gray-600 my-28">
        <div
          className="cursor-pointer flex flex-col items-center"
          onClick={scrollToTop}
        >
          <FaArrowUpLong className="fill-gray-600 mb-4" />
          <div>Back to the Top</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
