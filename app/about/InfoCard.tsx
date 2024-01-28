"use client";
import { InfoProps } from "@/types/types";
import { Roboto } from "next/font/google";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const InfoCard = (info: InfoProps): JSX.Element => {
  return (
    <div className="max-w-[315px] bg-[#111111] pb-4 min-h-[465px] infoCard">
      <img src={info.background} alt="" />
      <figcaption className="w-full bg-[#111111] p-[25px] relative before:content-[''] before:absolute before:bottom-[100%] before:left-0 before:w-0 before:h-0 before:border-solid before:border-t-[55px] bfr before:border-l-[#111111] before:border-y-transparent before:border-r-transparent before:overflow-hidden">
        <img
          className="rounded-full absolute bottom-[100%] left-[25px] z-[1] max-w-[90px] opacity-1 object-cover"
          src={info.image}
        />
      </figcaption>
      <h2 className="px-2 text-2xl">{info.name}</h2>
      <h4 className="px-2 text-lg text-blue-500">{info.position}</h4>
      <p
        className={`p-2 text-[0.8em] opacity-[0.8] tracking-[1px] ${inter.className}`}
      >
        {info.description}
      </p>
    </div>
  );
};

export default InfoCard;
