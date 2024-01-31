import { supportData } from "./supportLinksData";

const SupportBlock = () => {
  return (
    <div className="col-start-1 col-end-3 flex justify-between items-center md:flex-row flex-col w-full profileAnimations">
      {supportData?.map((e, index) => (
        <div key={index} className="flex flex-col gap-3 w-full items-center">
          {e.Icon}
          <h4 className="capitalize font-bold">{e.title}</h4>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SupportBlock;
