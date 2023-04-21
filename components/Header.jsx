import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = ({placeholder}) => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestsNumber, setGuestsNumber] = useState(1);

  const handleReset = () => {
    setSearch("");
    setStartDate(new Date());
    setEndDate(new Date());
    setGuestsNumber(1)
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const router = useRouter();

  const  searchFor = async () => {
    if(search)
   await new Promise(success=>{
    router.push({
      pathname: "/search",
      query: {
        location: search,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestsNumber,
      },
    });
    success()
   }) 

   handleReset()
  };
  return (
    <header className="sticky bg-white top-0  py-4 px-2 md:px-6 shadow-md z-50">
      <div className="flex items-center justify-between">
        <Image
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          width={150}
          height={150}
          alt="logo"
          onClick={() => router.push("/")}
        />

        <div className=" items-center hidden sm:flex justify-between sm:w-[350px] lg:w-[550px] shadow-sm shadow-gray-400 hover:shadow-gray-400 hover:shadow-md duration-150 rounded-full p-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none bg-transparent px-6"
            type="text"
            placeholder={placeholder || "Search..."}
          />
          <MagnifyingGlassCircleIcon
            onClick={searchFor}
            className="h-10 cursor-pointer text-red-400 hidden md:block"
          />
        </div>

        <div className=" flex items-center gap-5 md:gap-12">
          <div className="flex gap-1 items-center">
            <p className="text-gray-500 hidden md:block cursor-pointer text-xs lg:text-base">
              Become a host
            </p>
            <GlobeAltIcon className="h-6 text-gray-500 cursor-pointer" />
          </div>
          <div className="flex gap-2 p-1 px-3 border border-gray-500 rounded-full cursor-pointer">
            <Bars3Icon className="h-6 text-gray-500" />
            <UserCircleIcon className="h-6 text-gray-500  " />
          </div>
        </div>
      </div>
      {search && (
        <div className="flex flex-col max-w-fit  mx-auto mt-5 pr-24 ">
          {" "}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold flex-1">Number of Guests</h2>
            <UsersIcon className="h-6" />
            <input
              min={1}
              value={guestsNumber}
              onChange={(e) => setGuestsNumber(e.target.value)}
              className="w-12 text-red-400  outline-none p-2"
              type="number"
            />
          </div>
          <div className="flex mt-6">
            <button onClick={handleReset} className="flex-1  text-gray-500">
              Cancel
            </button>
            <button onClick={searchFor} className="flex-1 text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
