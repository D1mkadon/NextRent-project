import { useGSAP } from "@gsap/react";
import SocialBox from "./SocialBox";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const SocialSection = () => {
  const OurSocialsRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".OurSocials", {
        scrollTrigger: {
          trigger: ".OurSocials",
          start: "top 80%",
        },
        y: 120,
        opacity: 0,
        duration: 0.7,
        ease: "power1.inOut",
        yoyo: true,
      });
    },
    { scope: OurSocialsRef }
  );
  return (
    <div
      ref={OurSocialsRef}
      className=" flex items-center flex-col justify-center h-[100vh]"
    >
      <h2 className="text-6xl md:text-8xl p-6 my-6 OurSocials text-center">
        Follow us
      </h2>
      <SocialBox />
    </div>
  );
};

export default SocialSection;
