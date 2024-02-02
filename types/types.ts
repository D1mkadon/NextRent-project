import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

export interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  textStyles: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface InfoProps {
  background: string;
  description: string;
  image: string;
  name: string;
  position: string;
}
export interface WorkBoxProps {
  text: string;
  Icon?: JSX.Element;
  Description: string;
}
export interface RoadProps {
  title: string;
  description: string;
  image: StaticImageData;
  position?: string;
}
export interface AccountProps {
  displayName: string;
  photoURL?: string;
  email: string;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface FilterProps {
  manufacturer: string;
  year: number | string;
  fuel: string;
  limit: number;
  model: string;
}
export interface HomeProps {
  searchParams: FilterProps;
}
