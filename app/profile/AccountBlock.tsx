import Image from "next/image";
import Link from "next/link";
import { profileLinksData } from "./profileLinksData";
import { AccountProps } from "@/types/types";

const AccountBlock = ({ photoURL, displayName, email }: AccountProps) => {
  return (
    <div className="w-full gap-6 flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl py-6 getToKnow">My Profile</h2>
      <div className="flex items-center gap-6">
        <Image
          src={!!photoURL ? photoURL : ""}
          alt="/"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p>{displayName}</p>
          <p>{email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {profileLinksData.map((e, index) => (
          <Link
            className="SocialsAnimation flex items-center gap-2 capitalize"
            key={index}
            href={e.link}
          >
            {e.Icon} {e.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccountBlock;
