import React, { useContext } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';
import Spinner from '../components/Spinner';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);


    const blogId = location.pathname.split("/").at(-1);                // it give blog_id which is present at last index of pathname

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

  return (

    <div className='w-11/12 max-w-[670px] h-auto py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center items-center'>
      <Header/>
      <button onClick={() => navigation(-1)} className='left-3 top-[14px] fixed  text-black-500 text-[18px]  bg-blue-600 hover:bg-blue-700 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none '> Back </button>
       
         { loading ?  (<Spinner />) : (

                                blog ?
                                (<div>
                                    <BlogDetails post = {blog} />
                                    <h2 className='flex justify-center font-bold text-3xl mb-5 mt-5 font-serif text-red-800'> Related Blogs </h2>
                                    { relatedblogs.map( (post) => (
                                           <div key = {post.id} className='mb-8'>  <BlogDetails post={post} />  </div>
                                            ))}
                                    

                                </div> ) :  ( <div>  <p>No Blog Found</p> </div> )
                        )}

    </div>
  
)}

export default BlogPage
