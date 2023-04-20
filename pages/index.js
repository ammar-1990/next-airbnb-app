import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import SmallCard from '@/components/SmallCard'
import MediumCard from '@/components/MediumCard'
import LargCard from '@/components/LargCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home({exploreData,imgData}) {
  return (
 <div >
  <Head>
    <title>
      Airbnb
    </title>
  </Head>
  
<Header/>
<Banner />

<main className='max-w-[1100px] mx-auto  p-5'> 
<section className='p-4'>
<h1 className='font-bold text-2xl'>Explore Nearby</h1>

<div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
  {exploreData?.map((item,i)=><SmallCard key={i} {...item} />)}
</div>

</section>
<section className='p-4'>
<h1 className='font-bold text-2xl'>Live Anywhere</h1>
<div className='overflow-x-scroll myScroll -ml-3'>
<div className='mt-4 flex space-x-4 p-3  w-[1200px]'>
  {imgData?.map((item,i)=><MediumCard key={i} {...item} />)}
</div>
</div>

</section>

<LargCard 
img='/assets/bigCard.webp'
title='The Greatest Outdoors'
description='Wishlists curated by Airbnb'
buttonText='Get Inspired'
/>


</main>
  
  
  </div>
  )
}



export async function getStaticProps(){
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(res=>res.json())
  exploreData.forEach((element,i) => {
    element.img=`/assets/${i+1}.webp`
  });

  
const imgData=
[
{
  img:"https://links.papareact.com/2io", 
  title: "Outdoor getaways"
},
{
  img:"https://links.papareact.com/q7j", 
  title: "Unique stays"
},
{
  img:"https://links.papareact.com/s03", 
  title: "Entire homes"
},
{
  img:"https://links.papareact.com/8ix", 
  title: "Pet allowed"
},
]

  return {
    props : {
exploreData,
imgData
    }
  }
}