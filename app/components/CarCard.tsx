"use client";
import { carProps } from "@/types/types";
import {
  calculateCarPrice,
  calculateCarRent,
  generateCarImageUrl,
} from "@/utils";
import Image from "next/image";
import CardDetails from "./CarDetails";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { Cylinder, Fuel, LifeBuoy } from "lucide-react";
interface CarCardProps {
  car: carProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    city_mpg,
    year,
    make,
    model,
    transmission,
    drive,
    combination_mpg,
    cylinders,
    displacement,
    highway_mpg,
  } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const carPrice: number = calculateCarPrice(car);
  return (
    <div className="flex m-2 flex-col items-center p-2 w-64 h-80 bg-white/[.02] font-mono group">
      <h2 className="capitalize font-semibold">
        {make}
        {model}
      </h2>
      <h3 className="capitalize"></h3>
      <p className="flex  text-[32px] font-extrabold self-start">
        {carPrice}
        <span className="self-start text-[14px] font-semibold">$</span>
      </p>
      <div className="flex flex-col w-full justify-between text-grey">
        <Image
          src={generateCarImageUrl(car)}
          alt="/"
          width={250}
          height={150}
          // style={{ objectFit: "contain" }}
        ></Image>
        <div className="group-hover:hidden flex justify-between">
          <div className="flex flex-col items-center w-[33%]">
            <LifeBuoy color="#7685b2" />
            <span className="my-2 ">
              {transmission === "a" ? "Automatic" : "Manual"}
            </span>
          </div>
          <div className="flex flex-col items-center w-[33%]">
            <Cylinder color="#197bd7" />
            <span className="my-2">{cylinders}</span>
          </div>
          <div className="flex flex-col items-center w-[33%]">
            <Fuel color="#7685b2" />
            <span className="my-2">{city_mpg}</span>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full px-4 rounded-full"
            textStyles="text-white border text-[20px] rounded-xl py-4 leading-[17px]"
            rightIcon="/"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CardDetails isOpen={isOpen} onClose={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
