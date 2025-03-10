import JourneyAnimation from "./JourneyAnimation";

const Hero = () => {
  return (
    <div
      className="relative bg-[#fafafa] bg-[linear-gradient(to_right,#ebebeb_1px,transparent_1px),linear-gradient(to_bottom,#ebebeb_1px,transparent_1px)] bg-[size:36px_36px] pt-24 pb-12"
      aria-hidden="true"
    >
      <div className="flex max-w-5xl mx-auto relative">
        <div className="w-1/2 pt-24">
          <p className="text-6xl font-bold pb-4">{`Hi, I'm Noah!`}</p>
          <p className="text-2xl font-medium text-slate-400">
            {`After 5 years in `}
            <span className="text-black">{`management consulting`}</span>
            {`, I `}
            <span className="text-orange-500">{`traveled`}</span>
            {`, learned to `}
            <span className="text-emerald-500">{`code`}</span>
            {`, and started a `}
            <span className="text-blue-500">{`startup.`}</span>
          </p>
          <button className="bg-black text-white px-4 py-2 mt-6 rounded-md text-sm font-medium hover:bg-blue-500 hover:cursor-pointer">
            {`Get in touch`}
          </button>
        </div>
        <div className="w-1/2 h-[400px] pt-12">
          <JourneyAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
