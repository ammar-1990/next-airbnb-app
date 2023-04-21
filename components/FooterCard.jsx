import React from 'react'

const FooterCard = ({title,data}) => {
  return (
    <div className='text-xs text-gray-800 space-y-4'>
<h5 className='font-bold text-xl uppercase'>{title}</h5>

  {data.map((el,i)=><p className='capitalize cursor-pointer ' key={i}>{el}</p>)}


    </div>
  )
}

export default FooterCard