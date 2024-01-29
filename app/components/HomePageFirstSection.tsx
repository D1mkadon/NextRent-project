import { useGSAP } from "@gsap/react";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import car from "../images/auto1.png";
import ImageBackground from "../images/test5.png";

gsap.registerPlugin(_ScrollTrigger);
const inter = Dancing_Script({ subsets: ["latin"] });

const HomePageFirstSection = () => {
  const mainScope = useRef(null);
  useGSAP(() => {
    gsap.from(".MainImage", {
      scrollTrigger: {
        trigger: ".MainTitle",
        start: "top 80%",
      },

      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power1.inOut",
      yoyo: true,
    });
    gsap.from(".MainTitle", {
      scrollTrigger: {
        trigger: ".MainTitle",
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 0.7,
      ease: "power1.inOut",
      yoyo: true,
      delay: 0.6,
    });
    gsap.from(".MainCar", {
      scrollTrigger: {
        trigger: ".MainCar",
        start: "top 80%",
      },
      x: 100,
      opacity: 0,
      duration: 0.7,
      ease: "power1.inOut",
      yoyo: true,
      delay: 0.6,
    });
  }, {});
  return (
    <div
      ref={mainScope}
      className=" object-cover lg:object-cover bgroad relative h-[110vh] w-[100%] flex justify-center items-center md:justify-normal md:items-start"
    >
      <Image
        className="MainImage"
        fill={true}
        src={ImageBackground}
        priority
        style={{ objectFit: "cover" }}
        alt="/"
      />
      <div className="MainTitle relative w-[350px] h-[250px] bg-white/[0.6] md:w-[350px] md:h-[250px] md:top-[25%] md:left-[20%] shadow-xl flex justify-center items-center font-mono">
        <h1
          className={`font-extrabold text-black text-6xl  ${inter.className}`}
        >
          Rent Car
        </h1>
      </div>
      <div className="MainCar hidden lg:flex absolute top-[40%] right-0 md:right-2 md:top-[30%] object-cover w-[450px] h-[250px] md:h-[450px] md:w-[950px]">
        <Image fill={true} src={car} alt="/" />
      </div>
    </div>
  );
};

export default HomePageFirstSection;
