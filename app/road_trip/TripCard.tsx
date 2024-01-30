import { RoadProps } from "@/types/types";

const TripCard = ({ description, image, title, position }: RoadProps) => {
  return (
    <div className={`w-[33%] flex flex-col tripAnimate relative ${position}`}>
      {/* <Image src="" alt="" width={150} height={150} /> */}
      <h2 className={`md:text-6xl text-white text-3xl p-2 `}>{title}</h2>
      <p className="p-2">{description}</p>
    </div>
  );
};

export default TripCard;
