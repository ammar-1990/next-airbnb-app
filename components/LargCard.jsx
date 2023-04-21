import Image from 'next/image'
import React from 'react'

const LargCard = ({img,title,description,buttonText}) => {
  return (
    <div className='relative min- p-4'>
        <div className='relative h-96 min-w-[250px]'>  
          <Image src={img} fill objectFit='cover'  className='rounded-2xl'/>
          </div>
    
        <div className='absolute top-14 left-14 space-y-4 '>
            <h1 className='text-2xl font-bold w-36'>{title}</h1>
            <p className='text-sm'>{description}</p>
            <button className='text-sm text-white bg-black p-3 py-2 font-bold rounded-md'>{buttonText}</button>
        </div>


    </div>
  )
}

export default LargCard