import React from 'react'
import FooterCard from './FooterCard'

const Footer = () => {
  return (
    <div className='lg:px-32 px-12 py-14 bg-gray-100 grid grid-cols-1 md:grid-cols-4 gap-10'>

        <FooterCard
         title={'about'} 
         data={["How airbnb works","newsroom","investors","airbnb plus","airbnb luxe"]}
         />   

         <FooterCard
         title={'community'} 
         data={["accessabilty","this is not a real site","it's a pretty awesome clone","refferal accepted","developers"]}
         />   
         <FooterCard
         title={'host'} 
         data={["web-developer","presents","best websites","hundreds of projects","join now"]}
         />   
         <FooterCard
         title={'support'} 
         data={["help center","trust & safety","say hi youTube","services","for the win"]}
         />   






    </div>
  )
}

export default Footer