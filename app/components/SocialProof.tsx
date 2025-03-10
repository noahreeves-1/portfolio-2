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
    <div className="mt-12">
      <h2 className="text-center text-sm font-semibold text-gray-800">
        TRUSTED BY STARTUPS AND FORTUNE 500 COMPANIES
      </h2>
      <div className="flex justify-center items-center gap-8">
        <Image src={accenture} alt="Accenture" width={100} height={60} />
        <Image src={att} alt="AT&T" width={60} height={60} />
        <Image src={ecolab} alt="Ecolab" width={70} height={60} />
        <Image src={couchetard} alt="Couche Tard" width={100} height={60} />
        <Image src={redHat} alt="Red Hat" width={80} height={60} />
        <Image src={kornFerry} alt="Korn Ferry" width={100} height={60} />
        <Image src={rnl} alt="RNL" width={80} height={60} />
        <Image
          src={businessExpoCenter}
          alt="Business Expo Center"
          width={100}
          height={60}
        />
        <Image src={glassDoctor} alt="Glass Doctor" width={100} height={60} />
        <Image src={muffin} alt="Muffin" width={60} height={60} />
      </div>
    </div>
  );
};

export default SocialProof;
