"use client";

import { useEffect, useRef, useState } from "react";
import CarCard from "./components/CarCard";
import Image from "next/image";
import SecondSlider from "./components/SecondSlider";
import sliderBackground from "./images/modern-empty-room.jpg";
import _ScrollTrigger from "gsap/ScrollTrigger";
import HomePageFirstSection from "./components/HomePageFirstSection";
import SearchBar from "./components/SearchBar";
import { FilterProps, HomeProps } from "@/types/types";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function Home({ searchParams }: HomeProps) {
  const [cars, setCars] = useState([]);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2012);
  const [limit, setLimit] = useState(15);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios({
      url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}`,

      method: "GET",
      headers: {
        "X-RapidAPI-Key": "85624eb103msha1055faed589f15p18e942jsndd4a4cf7090d",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((res) => {
        setCars(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [manufacturer, model]);

  const elementRef = useRef(null);
  useGSAP(
    () => {
      !cars.length
        ? null
        : gsap.from(".carAnimate", {
            scrollTrigger: {
              trigger: elementRef.current,
              start: "-100% 100%",
            },
            y: 100,
            opacity: 0,
            ease: "power1.inOut",
            delay: 1,
            yoyo: true,
            stagger: {
              each: 0.2,
            },
          });
    },
    { scope: elementRef, dependencies: [manufacturer] }
  );
  // animations ends
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
      <div
        ref={elementRef}
        className="Container mt-7 flex-auto flex flex-col justify-center items-center gap-6"
      >
        <SearchBar
          setManufacturer={setManufacturer}
          setModel={setModel}
          setYear={setYear}
          setLimit={setLimit}
          manufacturer={manufacturer}
          model={model}
        />
        {loading ? (
          <p> Loading... </p>
        ) : (
          <div className="flex flex-wrap items-start justify-center">
            {cars?.map((car, index) => <CarCard key={index} car={car} />)}
          </div>
        )}
      </div>
      {/* 4th section  */}
    </div>
  );
}
