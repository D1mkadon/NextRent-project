"use client";
import { getData } from "../utils/index";
import { useEffect, useState } from "react";
import CarCard from "./components/CarCard";
import ferrari from "./images/auto1.png";
import Image from "next/image";
import ImageBackground from "./images/test5.png";
import { Dancing_Script } from "next/font/google";
import { SliderData } from "./components/SliderData";
import SecondSlider from "./components/SecondSlider";
import sliderBackground from "./images/modern-empty-room.jpg";

const inter = Dancing_Script({ subsets: ["latin"] });
export default function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getData.then((res) => setCars(res.data)).catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="object-cover lg:object-cover bgroad relative h-[110vh] w-[100%] flex justify-center items-center md:justify-normal md:items-start">
        <Image
          fill={true}
          src={ImageBackground}
          priority
          style={{ objectFit: "cover" }}
          alt="/"
        />
        <div className="relative w-[350px] h-[250px] bg-white/[0.6] md:w-[350px] md:h-[250px] md:top-[25%] md:left-[20%] shadow-xl flex justify-center items-center font-mono">
          <h1
            className={`font-extrabold text-black text-6xl ${inter.className}`}
          >
            Rent Car
          </h1>
        </div>
        <div className="hidden lg:flex absolute top-[40%] right-0 md:right-2 md:top-[30%] object-cover w-[450px] h-[250px] md:h-[450px] md:w-[950px]">
          <Image fill={true} src={ferrari} alt="/" />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="absolute h-[500px] w-screen xl:w-[1280px] flex justify-center items-end p-4 shd overflow-hidden rounded">
          <Image
            src={sliderBackground}
            fill={true}
            alt="/"
            objectFit="cover"
            className="z-0 scale-[1.3] md:object-cover object-contain"
          />
        </div>
        <SecondSlider />
      </div>

      <div className="Container mt-7 flex-auto">
        <div className="flex flex-wrap items-start justify-center">
          {cars?.map((car, index) => <CarCard key={index} car={car} />)}
        </div>
      </div>
    </div>
  );
}
