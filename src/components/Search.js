import React, { useContext } from "react";
import CountryDropdown from "../components/CountryDropdown";
import PropertyDropdown from "../components/PropertyDropdown";
import PriceRangeDropdown from "../components/PriceRangeDropdown";

import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { houses, handleClick } = useContext(HouseContext);
  return (
    <div className="px-[30px] py-6 flex max-w-[1170px] mx-auto flex-col lg:flex-row justify-between gap-4 lx:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={handleClick}
        className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex items-center justify-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
