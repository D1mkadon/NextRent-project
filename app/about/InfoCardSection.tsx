"use client";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { InfoCardData } from "./InfoCardData";
import InfoCard from "./InfoCard";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const InfoCardSection = () => {
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".infoCard", {
        scrollTrigger: {
          trigger: ".infoCard",
          start: "top 80%",
        },
        scale: 0,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        stagger: { each: 0.2 },
      });
    },
    { scope: sectionRef }
  );
  return (
    <div
      ref={sectionRef}
      className="infoCardSection flex gap-10 justify-center items-center my-20 md:my-0 min-h-[100vh] flex-wrap "
    >
      {InfoCardData?.map((info, index) => (
        <InfoCard
          key={index}
          background={info.background}
          description={info.description}
          image={info.image}
          name={info.name}
          position={info.position}
        />
      ))}
    </div>
  );
};

export default InfoCardSection;
