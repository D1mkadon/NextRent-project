"use client";
import gsap from "gsap";
import TripCard from "./TripCard";
import { roadData } from "./roadData";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TripSection = () => {
  const el = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(el);

  useGSAP(
    () => {
      q(".tripAnimate").forEach((s) => {
        gsap.from(s, {
          scrollTrigger: {
            trigger: s,
            start: "top center",
            end: "bottom top",
          },
          y: 100,
          opacity: 0,
          ease: "power1.inOut",
          yoyo: true,
          duration: 1,
        });
      });
    },
    { scope: el }
  );
  useGSAP(() => {
    gsap.from(".getToKnow", {
      scrollTrigger: {
        trigger: ".getToKnow",
        start: "top 100%",
      },
      y: 120,
      duration: 0.5,
      ease: "power1.inOut",
      yoyo: true,
    });
  }, {});
  return (
    <div className="min-h-[100vh] my-10">
      <h2 className="text-4xl md:text-8xl p-6 my-6 overflow-hidden getToKnow">
        Everything you need
      </h2>
      <div ref={el} className="w-full flex flex-col gap-10 md:gap-6 ">
        {roadData?.map((info, index) => (
          <TripCard
            key={index}
            title={info.Title}
            description={info.description}
            image={info.image}
            position={index % 2 === 0 ? "self-start" : "self-end"}
          />
        ))}
      </div>
    </div>
  );
};

export default TripSection;
