import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
const SearchItem = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) => {
  return  <div className="flex flex-col md:flex-row md:py-4 pb-4  cursor-pointer hover:opacity-80 duration-150 hover:shadow-lg ease-out first:border-t  border-b w-[300px] md:w-auto  gap-5 md:gap-0 rounded-lg">
    <div className="w-[300px] md:w-[400px]  aspect-video relative">
    <img loading="lazy" src={img}  alt='desciption image'  className=" md:rounded-3xl  rounded-t-3xl absolute w-[300px] md:w-[400px] aspect-video  top-0 left-0 object-cover "/>
    </div>

    <div className="md:pl-4 flex flex-col relative md:flex-1 h-[250px] md:h-auto p-5 md:pt-0 md:pr-0 md:pb-0 ">
        <div className="flex justify-between items-center">
        <p className="text-xs text-gray-600">{location}</p>
        <div className=" cursor-pointer">
    <HeartIcon  className="h-6 text-gray-600 "/>
</div>
        </div>

<p className="mt-3 mb-6 text-xl font-semibold">{title}</p>
<p className="text-xs text-gray-600">{description}</p>
<div className="flex justify-between items-center mt-auto">
<div className=" flex  ">
<StarIcon  className="text-red-400 h-6"/>
<span>{star}</span>
</div>
<div className=" flex flex-col ">
    <span className="md:text-2xl text-lg font-bold">{price}</span>
    <span className="text-xs text-gray-600">{total}</span>

</div>

</div>





    </div>

  
  </div>

};

export default SearchItem;
