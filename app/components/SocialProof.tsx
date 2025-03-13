import Image from "next/image";
import accenture from "@public/accenture.webp";
import businessExpoCenter from "@public/business-expo-center.webp";
import glassDoctor from "@public/glass-doctor.webp";
import kornFerry from "@public/korn-ferry.webp";
import muffin from "@public/muffin.svg";
import att from "@public/att.webp";
import ecolab from "@public/ecolab.webp";
import couchetard from "@public/couche-tard.webp";
import rnl from "@public/rnl.webp";
import redHat from "@public/red-hat.webp";

const SocialProof = () => {
  return (
    <div className="mt-8 md:mt-12">
      <h2 className="text-center text-xs md:text-sm font-semibold text-gray-800 px-4">
        TRUSTED BY SMALL BUSINESSES AND FORTUNE 500 COMPANIES
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mt-4 px-4">
        <div className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center">
          <Image
            src={accenture}
            alt="Accenture"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-16 h-12 md:w-18 md:h-14 flex items-center justify-center">
          <Image
            src={att}
            alt="AT&T"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-20 h-12 md:w-22 md:h-14 flex items-center justify-center">
          <Image
            src={ecolab}
            alt="Ecolab"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center">
          <Image
            src={couchetard}
            alt="Couche Tard"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-20 h-12 md:w-22 md:h-14 flex items-center justify-center">
          <Image
            src={redHat}
            alt="Red Hat"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center">
          <Image
            src={kornFerry}
            alt="Korn Ferry"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-16 h-12 md:w-18 md:h-14 flex items-center justify-center">
          <Image
            src={rnl}
            alt="RNL"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center">
          <Image
            src={businessExpoCenter}
            alt="Business Expo Center"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center">
          <Image
            src={glassDoctor}
            alt="Glass Doctor"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-16 h-12 md:w-18 md:h-14 flex items-center justify-center">
          <Image
            src={muffin}
            alt="Muffin"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
