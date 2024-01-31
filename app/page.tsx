"use client";
import { getData } from "../utils/index";
import { useEffect, useRef, useState } from "react";
import CarCard from "./components/CarCard";
import Image from "next/image";
import SecondSlider from "./components/SecondSlider";
import sliderBackground from "./images/modern-empty-room.jpg";
import _ScrollTrigger from "gsap/ScrollTrigger";
import HomePageFirstSection from "./components/HomePageFirstSection";

export default function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getData.then((res) => setCars(res.data)).catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <HomePageFirstSection />
      {/* 2nd section  */}
      <h2 className="text-center mt-6 text-4xl font-bold">Gallery</h2>
      <div className="flex justify-center mt-10 h-[650px]">
        <div className="absolute h-[500px] w-screen xl:w-[1280px] flex justify-center items-end p-4 shd overflow-hidden rounded">
          <Image
            src={sliderBackground}
            fill={true}
            alt="/"
            // sizes="(min-width: 1360px) 1280px, calc(94.23vw + 17px)"
            className="z-0 scale-[1.3] md:object-cover object-cover"
          />
        </div>
        <SecondSlider />
      </div>
      {/* 3rd section  */}
      <div className="Container mt-7 flex-auto">
        <div className="flex flex-wrap items-start justify-center">
          {cars?.map((car, index) => <CarCard key={index} car={car} />)}
        </div>
      </div>
      {/* 4th section  */}
    </div>
  );
}
