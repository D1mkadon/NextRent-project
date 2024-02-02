"use client";

import { useEffect, useState } from "react";
import CarCard from "./components/CarCard";
import Image from "next/image";
import SecondSlider from "./components/SecondSlider";
import sliderBackground from "./images/modern-empty-room.jpg";
import _ScrollTrigger from "gsap/ScrollTrigger";
import HomePageFirstSection from "./components/HomePageFirstSection";
import SearchBar from "./components/SearchBar";
import { FilterProps, HomeProps } from "@/types/types";
import axios from "axios";

export default function Home({ searchParams }: HomeProps) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getData = ({
      manufacturer,
      year,
      model,
      fuel,
      limit,
    }: FilterProps) => {
      axios({
        url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,

        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "85624eb103msha1055faed589f15p18e942jsndd4a4cf7090d",
          "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
      })
        .then((res) => {
          setCars(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };

    getData({
      manufacturer: searchParams.manufacturer || "",
      year: searchParams.year || 2012,
      fuel: searchParams.fuel || "",
      limit: searchParams.limit || 15,
      model: searchParams.model || "",
    });
  }, [searchParams]);
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
      <div className="Container mt-7 flex-auto flex flex-col justify-center items-center gap-6">
        <SearchBar />
        <div className="flex flex-wrap items-start justify-center">
          {cars?.map((car, index) => <CarCard key={index} car={car} />)}
        </div>
      </div>
      {/* 4th section  */}
    </div>
  );
}
