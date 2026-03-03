import Heading from "../Components/heading";
import Images from "../Components/Images";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom"; // Link istifadəsi vacibdir

const Home = () => {
  return (
    <>
      {/* 1. BLACK SECTION: APPLE SHOPPING EVENT */}
      <section className="bg-black min-h-screen flex flex-col items-center">
        <header className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-10">
          <div className="max-w-200">
            <h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tight">
              Apple Shopping Event
            </h1>
            <p className="text-[#f5f5f7] text-xl md:text-2xl mt-4 font-normal max-w-125 mx-auto leading-tight">
              From November 25 to 28, get an Apple Gift Card when you buy an
              eligible product.<sup>1</sup>
            </p>
            <div className="mt-5">
              <Link
                to="/offers"
                className="text-[#2997ff] hover:underline text-xl font-normal"
              >
                Get an early look &gt;
              </Link>
            </div>
          </div>

          <div className="mt-14 w-full max-w-212.5">
            <img
              src="/electorinc_Tools.jpg"
              alt="Apple Products"
              className="w-full h-auto object-contain"
            />
          </div>
        </header>
      </section>

      <main className="flex flex-col gap-3 mt-3">
        {/* 2. MOVIE SECTION: SPIRITED */}
        <section
          className="h-150 md:h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url(/men.jpg)" }}
        >
          <div className="container mx-auto h-full flex flex-col justify-between py-16 px-10">
            <div className="flex justify-between w-full">
              <span className="font-medium text-xl md:text-2xl text-amber-50 uppercase tracking-[0.2em]">
                Will Ferrell
              </span>
              <span className="font-medium text-xl md:text-2xl text-amber-50 uppercase tracking-[0.2em]">
                Ryan Reynolds
              </span>
            </div>
            <div className="flex flex-col items-center text-center text-white mb-10">
              <p className="text-xl md:text-2xl max-w-lg font-light mb-4">
                A new musical comedy based on a holiday classic.
              </p>
              <p className="text-lg font-semibold tracking-[0.3em] uppercase">
                Now streaming
              </p>
            </div>
          </div>
        </section>

        {/* 3. iPHONE 14 SECTION */}
        <section className="bg-[#FBFBFD] pt-16 md:pt-24 flex flex-col items-center">
          <div className="text-center px-6 z-10">
            <h2 className="text-[#1d1d1f] text-5xl md:text-7xl font-semibold tracking-tight">
              iPhone 14
            </h2>
            <p className="text-[#1d1d1f] text-2xl md:text-3xl mt-3 font-normal">
              Big and bigger.
            </p>
            <div className="mt-5 flex gap-8 justify-center">
              <Link
                to="/iphone-14"
                className="text-[#0066cc] hover:underline text-xl font-normal"
              >
                Learn more &gt;
              </Link>
              <Link
                to="/buy"
                className="text-[#0066cc] hover:underline text-xl font-normal"
              >
                Buy &gt;
              </Link>
            </div>
          </div>

          <div className="mt-8 w-full max-w-275 px-2 md:px-0">
            <img
              src="/iphone14.jpg"
              alt="iPhone 14 Hands"
              className="w-full h-auto object-contain block mx-auto translate-y-2"
            />
          </div>
        </section>

     
        <Images />
        <Hero />
      </main>
    </>
  );
};

export default Home;
