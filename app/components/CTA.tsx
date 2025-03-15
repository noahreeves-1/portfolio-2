import Image from "next/image";
import Preparation from "@/public/preparation.svg";

const CTA = () => {
  return (
    <section className="pb-24 pt-4 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6">
              {`Let's create something amazing together`}
              <span className="text-gray-500">
                —bringing your vision to life.
              </span>
            </h2>
            <p className="text-gray-500 text-lg">
              {`As a life-long learner, I'm always looking for new challenges and opportunities to grow and expand my skillset. Let's talk!`}
            </p>
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-lg font-medium transition-transform hover:scale-105"
            >
              Start building for free
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a> */}
          </div>
          <div className="relative h-80 w-80 md:h-96 md:w-96 flex items-center justify-center">
            <Image
              src={Preparation}
              alt="Preparation"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
