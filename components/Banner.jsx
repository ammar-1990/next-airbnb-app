import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] ">
<Image src='/assets/banner.webp' fill objectFit="cover" objectPosition=" bottom" alt="banner image" />

<div className="absolute inset-0 w-full h-full flex-col  flex items-center justify-center">

    <p className="capitalize font-semibold">Not sure where to go ? perfect</p>
    <button className="mt-3 font-bold text-purple-500 bg-white rounded-full shadow-md cursor-pointer px-4 py-3 hover:shadow-lg active:scale-90 duration-150">I'm' flexable</button>
</div>
    </div>
  )
}

export default Banner