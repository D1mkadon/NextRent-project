import { carProps } from "@/types/types";
import axios from "axios";
const DATA_URL = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";

export const getData = axios({
  url: `${DATA_URL}`,
  params: { model: "r8" },
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cd06eb80d5mshbf43b5d47983ad7p12ad66jsn77f209215168",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
});
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const calculateCarPrice = (properties: carProps): number => {
  let basePrice: number = 10000;
  let price: number =
    basePrice +
    properties.city_mpg * 10 +
    properties.combination_mpg * 5 -
    properties.cylinders * 500 +
    properties.displacement * 100 -
    properties.highway_mpg * 7 +
    (2022 - properties.year) * 200;

  return Math.max(0, price);
};

export const generateCarImageUrl = (car: carProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};
