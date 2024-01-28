import { WorkBoxProps } from "@/types/types";
import { Roboto } from "next/font/google";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const WorkBox = ({ text, Icon, Description }: WorkBoxProps): JSX.Element => {
  return (
    <div className="workBox flex-col text-center items-center md:w-[20%] w-[100vw]">
      <h4 className="text-blue-500 flex justify-center">{Icon}</h4>
      <h3 className="text-xl font-bold py-2">{text}</h3>
      <p
        className={`text-[0.8em] opacity-[0.8] tracking-[1px]${inter.className}`}
      >
        {Description}
      </p>
    </div>
  );
};

export default WorkBox;
