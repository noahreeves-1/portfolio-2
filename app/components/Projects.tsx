import Image from "next/image";
import MuffinLogo from "@/public/muffin-white.svg";

// Project Card component for reusability
const ProjectCard = ({
  title,
  description,
  imageSrc,
  logoSrc,
  features,
  orientation = "left",
  bgColor = "bg-blue-600",
  stat = {
    value: "+2x",
    description: "User engagement compared to similar apps",
  },
  websiteUrl = "#",
  learnMoreUrl = "#",
}: {
  title: string;
  description: string;
  imageSrc: string;
  logoSrc?: string;
  features: string[];
  orientation?: "left" | "right";
  bgColor?: string;
  stat?: {
    value: string;
    description: string;
  };
  websiteUrl?: string;
  learnMoreUrl?: string;
}) => {
  // Calculate stats background color (one shade lighter)
  const getStatsBackgroundColor = () => {
    if (!bgColor) return "bg-blue-500";

    // Parse the bgColor to extract color and shade
    const match = bgColor.match(/bg-(\w+)-(\d+)/);
    if (!match) return "bg-blue-500";

    const [, colorName, shade] = match;
    const lighterShade = parseInt(shade) - 100;

    // Ensure the shade is valid (not below 50)
    if (lighterShade < 50) return `bg-${colorName}-50`;

    return `bg-${colorName}-${lighterShade}`;
  };

  // Calculate bullet color (darker shade)
  const getBulletColor = () => {
    if (!bgColor) return "bg-blue-800";

    // Parse the bgColor to extract color and shade
    const match = bgColor.match(/bg-(\w+)-(\d+)/);
    if (!match) return "bg-blue-800";

    const [, colorName, shade] = match;
    const darkerShade = parseInt(shade) + 200;

    // Ensure the shade is valid (not above 900)
    if (darkerShade > 900) return `bg-${colorName}-900`;

    return `bg-${colorName}-${darkerShade}`;
  };

  // Get a darker background color for the image container
  const getImageContainerBgColor = () => {
    if (!bgColor) return "bg-blue-700";

    const match = bgColor.match(/bg-(\w+)-(\d+)/);
    if (!match) return "bg-blue-700";

    const [, colorName, shade] = match;
    const containerShade = parseInt(shade) + 100;

    // Ensure the shade is valid (not above 900)
    if (containerShade > 900) return `bg-${colorName}-900`;

    return `bg-${colorName}-${containerShade}`;
  };

  // Get border color for stat container - darker shade
  const getStatBorderColor = () => {
    if (!bgColor) return "border-blue-800";

    const match = bgColor.match(/bg-(\w+)-(\d+)/);
    if (!match) return "border-blue-800";

    const [, colorName, shade] = match;
    const borderShade = parseInt(shade) + 100;

    // Ensure the shade is valid (not above 900)
    if (borderShade > 900) return `border-${colorName}-900`;

    return `border-${colorName}-${borderShade}`;
  };

  const statsBackgroundColor = getStatsBackgroundColor();
  const bulletColor = getBulletColor();
  const imageContainerBgColor = getImageContainerBgColor();
  const statBorderColor = getStatBorderColor();

  return (
    <div className={`${bgColor} py-24`}>
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`flex flex-col ${
            orientation === "right" ? "md:flex-row-reverse" : "md:flex-row"
          } gap-8 items-center`}
        >
          {/* Project Image */}
          <div className="w-full md:w-1/2">
            <div
              className={`${imageContainerBgColor} px-24 rounded-4xl shadow-xl py-8`}
            >
              <Image
                src={imageSrc}
                alt={title}
                width={280}
                height={400}
                className="w-full h-auto rounded border border-gray-700"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="w-full md:w-1/2 text-white">
            <h3 className="text-4xl font-semibold mb-4">{title}</h3>
            <p className="mb-4">{description}</p>

            {/* Features List */}
            <ul className="space-y-2 mb-24">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className={`h-2 w-2 ${bulletColor} rounded-full mr-3 flex-shrink-0`}
                  ></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Stats Section */}
            <div className="mt-8">
              <div className="flex items-center mb-4">
                <div
                  className={`inline-block ${statsBackgroundColor} py-2 px-4 rounded mr-4 border ${statBorderColor}`}
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                </div>
                <p className="">{stat.description}</p>
              </div>

              {/* Divider Line */}
              <div className="border-t border-white opacity-30 mb-6"></div>

              {/* Action Links */}
              <div className="flex items-center gap-4 justify-between">
                <a
                  href={websiteUrl}
                  target="_blank"
                  className={`text-white font-medium px-4 py-2 rounded`}
                >
                  <Image
                    src={logoSrc || MuffinLogo}
                    alt="Website"
                    width={120}
                    height={120}
                  />
                </a>
                <a
                  href={learnMoreUrl}
                  className="text-white underline hover:text-blue-100 transition"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Project data
  const muffinProject = {
    title: "Muffin: Food App",
    description:
      "A social media mobile app where users can find meals near them based on their preferences with a TikTok-style UI. Sign up, swipe, and find your next perfect meal. Features include...",
    imageSrc: "/projects/spottedin.png",
    logoSrc: MuffinLogo,
    features: [
      "Personalized home feed",
      "Location-based search",
      "AI-powered image classification",
      "Push notifications",
      "& more",
    ],
    stat: {
      value: "1K+",
      description: "Downloads with zero ad spend",
    },
    bgColor: "bg-orange-500",
    websiteUrl: "https://muffinapp.io",
    learnMoreUrl: "/projects/muffin",
  };

  return (
    <section id="projects" className="py-16">
      <h2 className="text-sm font-bold text-center mb-4 text-slate-500">
        MY PROJECTS
      </h2>

      {/* First Project using the ProjectCard component */}
      <ProjectCard {...muffinProject} orientation="left" />
    </section>
  );
};

export default Projects;
