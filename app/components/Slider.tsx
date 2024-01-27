import Image from "next/image";
import { SliderData } from "./SliderData";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sliderBackground from "../images/modern-empty-room.jpg";
const Slider = ({ slides }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="max-w-[1240px] mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center p-4">Gallery</h2>

      <div className="relative h-[600px] flex justify-center items-end p-4 shd overflow-hidden rounded">
        <Image
          src={sliderBackground}
          fill={true}
          alt="/"
          objectFit="cover"
          className="z-0 scale-[1.3] "
        />
        <div className="z-[2] ">
          <ChevronLeft
            onClick={prevSlide}
            size={50}
            className="cursor-pointer absolute z-[2] select-none text-white/60 top-[50%] left-[20px]"
          />
          {SliderData.map((slide, index) => {
            return (
              <div
                key={index}
                className={`z-[1] ${
                  index === current
                    ? "opacity-[1] ease-in duration-700"
                    : "opacity-0"
                }`}
              >
                {index === current && (
                  <div className="relative ease-in duration-500 lg:w-[1024px] h-[40vh] md:h-[500px] top-0 md:top-10 lg:top-0 w-screen">
                    <Image
                      src={slide.image}
                      alt="/"
                      fill={true}
                      style={{ objectFit: "contain" }}
                      sizes=""
                      className="p-4 "
                    />
                  </div>
                )}
              </div>
            );
          })}
          <ChevronRight
            onClick={nextSlide}
            size={50}
            className="cursor-pointer absolute z-[2] select-none text-white/60 top-[50%] right-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
