"use client";
import { useRef } from "react";
import WorkBox from "./WorkBox";
import { WorkBoxData } from "./WorkBoxData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WorkWithUs = () => {
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".workBox", {
        scrollTrigger: {
          trigger: ".workBox",
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
  useGSAP(() => {
    gsap.from(".getToKnow", {
      scrollTrigger: {
        trigger: ".workBox",
        start: "top 80%",
      },
      y: 120,
      duration: 0.7,
      ease: "power1.inOut",
      yoyo: true,
      stagger: { each: 0.2 },
    });
  });
  return (
    <div className="min-h-[100vh] mt-[20%]">
      <div className="Container">
        <h2 className="text-6xl md:text-8xl p-6 my-6 getToKnow">
          Get to know us
        </h2>
        <div ref={sectionRef} className="flex flex-wrap gap-6">
          {WorkBoxData.map((e, index) => (
            <WorkBox
              key={index}
              text={e.text}
              Icon={e.Icon}
              Description={e.Description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
