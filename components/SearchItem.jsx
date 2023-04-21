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
  return <div className="py-4 shadow-md">
    <div className="flex">
    <div className="w-[250px] aspect-square relative">
    <img loading="lazy" src={img}  alt='desciption image'  className="rounded-3xl absolute w-[250px] aspect-square top-0 left-0 object-cover w-full"/>
    </div>

    <div className="pl-4 flex flex-col relative flex-1">
<p className="text-xs text-gray-600">{location}</p>
<p className="mt-3 mb-6 text-xl font-semibold">{title}</p>
<p className="text-xs text-gray-600">{description}</p>
<div className="mt-auto flex  ">
<StarIcon  className="text-yellow-500 h-6"/>
<span>{star}</span>
</div>

<div className="absolute bottom-1 right-1 flex flex-col ">
    <span className="text-2xl font-bold">{price}</span>
    <span className="text-xs text-gray-600">{total}</span>

</div>

<div className="absolute top-1 right-1 cursor-pointer">
    <HeartIcon  className="h-6 text-gray-600 "/>
</div>
    </div>

  
  </div>
  </div>;
};

export default SearchItem;
