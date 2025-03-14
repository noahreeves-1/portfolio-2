"use client";

import JourneyAnimation from "./JourneyAnimation";

const Hero = () => {
  return (
    <div
      className="relative bg-[#fafafa] bg-[linear-gradient(to_right,#ebebeb_1px,transparent_1px),linear-gradient(to_bottom,#ebebeb_1px,transparent_1px)] bg-[size:36px_36px] pt-16 md:pt-24 pb-8 md:pb-12"
      aria-hidden="true"
    >
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto px-4 md:px-6 relative">
        <div className="w-full md:w-1/2 pt-8 md:pt-24">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold pb-2 md:pb-4">{`Hi, I'm Noah!`}</p>
          <p className="text-xl md:text-2xl font-medium text-slate-400">
            {`After 5 years in `}
            <span className="text-black">{`management consulting`}</span>
            {`, I `}
            <span className="text-orange-500">{`traveled`}</span>
            {`, learned to `}
            <span className="text-emerald-500">{`code`}</span>
            {`, and ran a `}
            <span className="text-blue-500">{`startup.`}</span>
          </p>
          <button
            className="bg-black text-white px-4 py-2 mt-4 md:mt-6 rounded-md text-sm font-medium hover:bg-blue-500 hover:cursor-pointer"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {`Get in touch`}
          </button>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] mt-8 md:mt-0">
          <JourneyAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
