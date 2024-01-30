import { RoadProps } from "@/types/types";
import { Roboto } from "next/font/google";
import Image from "next/image";
const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const TripCard = ({ description, image, title, position }: RoadProps) => {
  return (
    <div
      className={`w-[100%] md:w-[46%] flex flex-col items-center md:items-start tripAnimate relative shd p-2 md:m-10 ${position}`}
    >
      <Image
        src={image}
        alt=""
        sizes="(max-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
      />
      <h2
        className={`md:text-5xl text-white text-2xl p-2 w-[80%] text-center md:text-left`}
      >
        {title}
      </h2>
      <p
        className={`p-2 w-[80%] text-[0.8em] opacity-[0.8] tracking-[1px] text-center md:text-left ${inter.className}`}
      >
        {description}
      </p>
    </div>
  );
};

export default TripCard;
