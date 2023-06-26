import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


function TagPage(){

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

  return (
    <div className='w-11/12 max-w-[670px] h-auto py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center items-center'>
        <Header/>
        <button onClick={() => navigation(-1)} className='left-3 top-[14px] fixed  text-black-500 text-[18px]  bg-blue-600 hover:bg-blue-700 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none '> Back </button>
        <h2 className='mt-2 mb-12 font-bold text-3xl' >  Blogs Tagged <span>#{tag}</span>  </h2> 
        <Blogs/>
        <Pagination/>

    </div>
  )
}

export default TagPage
