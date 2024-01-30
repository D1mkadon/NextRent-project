"use client";
import Image from "next/image";
import ImageBackground from "../images/tripBack.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TripSection from "./TripSection";
gsap.registerPlugin(ScrollTrigger);
const page = () => {
  useGSAP(() => {
    gsap.from(".MainImage", {
      scrollTrigger: {
        trigger: ".MainImage",
        start: "-100% 100%",
      },

      y: 1000,
      opacity: 0,
      duration: 0.4,
      ease: "power1.inOut",
      yoyo: true,
    });
  }, {});
  return (
    <div className="min-h-[100vh]">
      <div className=" object-cover lg:object-cover bgroad relative h-[110vh] w-[100%] flex justify-center items-center md:justify-normal md:items-start">
        <Image
          className="MainImage"
          fill={true}
          src={ImageBackground}
          priority={true}
          style={{ objectFit: "cover" }}
          alt="/"
        />
        <div className="MainTitle relative w-[80%] md:w-[30%] flex-col flex md:top-[25%] md:left-[20%] shadow-xl justify-center items-center font-mono">
          <h2 className={`font-extrabold md:text-6xl text-white text-4xl p-2 `}>
            Off for an adventure.
          </h2>
          <p>
            With two roadsters, a coupé and a saloon from Costa Rica’s capital
            San José to the Pacific Ocean and back: 700 kilometres through
            jungle, cloud forests and rivers, over beach and high mountain
            tracks.
          </p>
        </div>
      </div>

      <TripSection />
    </div>
  );
};

export default page;
