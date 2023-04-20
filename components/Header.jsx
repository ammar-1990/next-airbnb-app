import Image from "next/image"
import {MagnifyingGlassCircleIcon} from '@heroicons/react/24/solid'
import {GlobeAltIcon} from '@heroicons/react/24/outline'
import {Bars3Icon} from '@heroicons/react/24/outline'
import {UserCircleIcon} from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header className="sticky bg-white top-0 flex items-center justify-between py-4 px-2 md:px-6 shadow-md z-50">
<Image className="cursor-pointer" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' width={150} height={150} alt="logo"/>

<div className=" items-center hidden sm:flex justify-between sm:w-[350px] lg:w-[550px] border-2 border-gray-200 rounded-full p-2">
    <input className="flex-1 outline-none bg-transparent" type="text" placeholder="Search..."/>
    <MagnifyingGlassCircleIcon className='h-10 cursor-pointer text-red-400 hidden md:block' />
    </div>

<div className=" flex items-center gap-5 md:gap-12">
<div className="flex gap-1 items-center">
    <p className="text-gray-500 hidden md:block cursor-pointer text-xs lg:text-base">Become a host</p>
    <GlobeAltIcon className="h-6 text-gray-500 cursor-pointer"/></div>
<div className="flex gap-2 p-1 border border-gray-500 rounded-full">
<Bars3Icon  className="h-6 text-gray-500"/>
<UserCircleIcon  className="h-6 text-gray-500  "/>

</div>

</div>


    </header>
  )
}

export default Header