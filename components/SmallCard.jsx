import Image from "next/image"


const SmallCard = ({img,location,distance}) => {
  return (
    <div className="flex cursor-pointer gap-3 mb-5 m-3 items-center hover:bg-gray-200 duration-150 hover:scale-105 ease-out rounded-lg">

        <div className="w-16 h-16 relative">
            <Image src={img} fill className="rounded-lg"/>
        </div>



        <div>
<p>{location}</p>
<p className="text-gray-500">{distance}</p>


        </div>
    </div>
  )
}

export default SmallCard