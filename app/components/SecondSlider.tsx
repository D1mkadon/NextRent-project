import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { SliderData } from "./SliderData";
const SecondSlider = () => {
  return (
    <Carousel
      showArrows={true}
      centerMode={true}
      centerSlidePercentage={100}
      autoPlay
      className="xl:w-[1280px] w-screen"
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
    >
      {SliderData.map((car, index) => {
        return (
          <div
            key={index}
            className="relative ease-in duration-500 lg:w-[1024px] h-[60vh] md:h-[600px] top-20 md:top-10 xl:left-[8%] lg:top-0 w-screen  p-4"
          >
            <Image
              src={car.image}
              alt=""
              fill
              style={{ objectFit: "contain" }}
              className="p-4"
            ></Image>
          </div>
        );
      })}
    </Carousel>
  );
};

export default SecondSlider;
