// Server Component - no "use client" directive
import {
  WhoMeAnimationWrapper,
  AnimatedText,
  AnimatedBottomText,
} from "./WhoMeClient";

const WhoMe = () => {
  return (
    <section id="about-me" className="my-8">
      <div className="pt-20 px-4 text-black">
        <WhoMeAnimationWrapper>
          {/* Center text content */}
          <div className="max-w-4xl mx-4 md:mx-8 flex-grow">
            <AnimatedText className="text-center text-blue-500 font-mono text-sm font-medium mb-4 tracking-wider uppercase">
              WHO, ME?
            </AnimatedText>

            <AnimatedText className="text-center text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
              <p className="text-black">I Bridge the Gap Between </p>
              <p className="text-blue-500">Business and Tech</p>
            </AnimatedText>

            <AnimatedText className="text-center text-body-lg max-w-2xl mx-auto leading-relaxed text-gray-700">
              {`I've worked across small business marketing, Fortune 500 consulting, software engineering, and startup operations—giving me a rare mix of technical depth and business sense. Whether it's scaling a product, solving complex problems, or navigating ambiguity, I'm built for tackling challenges head-on.`}
            </AnimatedText>
          </div>
        </WhoMeAnimationWrapper>
        <AnimatedBottomText className="font-medium tracking-wide">
          Management Consulting <span className="text-blue-500 font-bold">×</span>{" "}
          Software Engineering
        </AnimatedBottomText>
      </div>
    </section>
  );
};

export default WhoMe;
