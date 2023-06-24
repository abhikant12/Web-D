import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


function Card({review}){        
  
  return (
    <div className='flex flex-col md:relative'>

      <div className='absolute top-[-7rem] z-[10] mx-auto'>                {/* we have to overlap image on cart so make parent relative and image absolute  */}                  
        <img className="aspect-square rounded-full w-[165px] h-[165px] border-[10px] border-cycn  z-[25]" src = {review.image}/>
      </div>
      
      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize'> {review.name} </p>
        <p className='text-violet-300 uppercase text-sm'> {review.job} </p>
      </div>

      <div className='text-violet-400 mx-auto mt-5'> <FaQuoteLeft/> </div>
      <div className='text-center mt-4 text-slate-500'> {review.text} </div>
      <div  className='text-violet-400 mx-auto mt-5'> <FaQuoteRight/> </div>
        
    </div>
  )
}

export default Card
