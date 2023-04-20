

const MediumCard = ({img,title}) => {
  return (
    <div className="mb-5 relative hover:scale-105 duration-150 ease-out cursor-pointer w-[300px] h-[300px]">
       
        <img loading="lazy" src={img}  className="  rounded-lg  w-[300px] h-[300px]" alt="image"/>

      
        <p className="font-bold">{title}</p>
  
    </div>
  )
}

export default MediumCard