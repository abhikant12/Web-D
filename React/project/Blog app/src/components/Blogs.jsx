import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import { NavLink } from 'react-router-dom'
import "./Blogs.css"
import BlogDetails from './BlogDetails';

function Blogs(){

   
  const {posts,loading} = useContext(AppContext);


  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center items-center'>
    
       { loading ?  (<Spinner />) : ( 

            posts.length === 0 ? (
                                  <div className="min-h-[80vh] w-full flex justify-center items-center">
                                  <p className="text-center font-bold text-3xl">No Blogs Found !</p>
                                  </div> ) : (
                      
                                    posts.map( (post) => (
                                                  <BlogDetails key={post.id} post={post}/>
                                        ))
                            )
                    )}
    </div>
  
  )}

export default Blogs
