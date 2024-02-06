"use client";

import { Search } from "lucide-react";
import SearchManufacturer from "./SearchManufacturer";
import { GalleryVertical } from "lucide-react";
import { SearchProps } from "@/types/types";
import { useState } from "react";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`ml-1 z-10 ${otherClasses}`}>
    <Search width={40} height={40} className="object-contain" />
  </button>
);

const SearchBar = ({
  setManufacturer,
  setModel,
  setYear,
  setLimit,
  model,
  manufacturer,
}: SearchProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (manufacturer === "" && model === "")
    //   return alert("Please fill search bar");
    setManufacturer(searchManufacturer);
    setModel(searchModel);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={searchManufacturer}
          setManufacturer={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item  ">
        <GalleryVertical
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          className="searchbar__input"
          type="text"
          name="model"
          value={model}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Stinger..."
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
