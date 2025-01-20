import React from "react";
import Gallery from "../components/gallery";
import Header from "../components/header";

const Home: React.FC = () => {
  return (
    <div className="font-barlow">
      <section className="[ hero ] [ bg-black w-full py-60 text-white text-center]">
        <div className="[ container ] [ mx-auto px-5 lg:px-40 text-white text-center ]">
          <div className="[ hero--paragraph ] [ flex  justify-center]">
            <h1 className="[ hero--title ] [ mb-5 text-5xl sm:text-8xl ]">
              Hi, I'm Jake Boulton. Designer and problem solver.
            </h1>
          </div>
          <div className="[ hero--paragraph ] [ flex jhttp://localhost:5173/ustify-center ]">
            <p className="[ w-[65ch] mt-5 text-base md:text-lg lg:text-xl ]">
              Welcome to my portfolio! I'm a freelance designer from Dunmow, UK,
              creating immersive, user-focused 3D experiences. Explore my work
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
      </section>
      <Header />
      <section className="[ Gallery ] [  ]">
        <Gallery />
      </section>
    </div>
  );
};

export default Home;
