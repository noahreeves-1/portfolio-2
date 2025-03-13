const WhyMe = () => {
  return (
    <section id="why-me" className="mb-8">
      <div className="py-16 px-4 text-black">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-green-400 font-medium mb-4">
            WHY HIRE ME?
          </h3>

          <h2 className="text-center text-xl md:text-3xl font-bold mb-6">
            <p className="text-black">I Bridge the Gap Between </p>
            <p className="text-green-400">Business and Tech</p>
          </h2>

          <p className="text-center text-lg max-w-lg mx-auto">
            {/* {`As someone who started his career as an unpaid marketing intern, I understand the challenges of bridging the gap between business and tech. I've led without a manager, solved Fortune 500 data challenges, self-taught code, and shipped products. I thrive in fast-moving environments, adapt quickly, and build solutions that matter.`} */}
            {`As an immigrant who started his career with two unpaid internships and worked his way up to management consulting, I am living proof that hard work pays off. With a background in marketing, consulting for Fortune 500s, and the technical skills to build products, I am uniquely positioned to tackle any challenge whether it's in business or technology.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
