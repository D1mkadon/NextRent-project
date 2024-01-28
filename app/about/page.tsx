import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import InfoCard from "./InfoCard";
import { InfoCardData } from "./InfoCardData";
export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("about");

  return (
    <div className="w-full min-h-[100vh] flex mt-[20%] flex-col">
      <SliceZone slices={page.data.slices} components={components} />
      <div className="flex gap-6 justify-center items-center min-h-[60vh] flex-wrap">
        {InfoCardData?.map((info, index) => (
          <InfoCard
            key={index}
            background={info.background}
            description={info.description}
            image={info.image}
            name={info.name}
            position={info.position}
          />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("about");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
