"use client"
import { adminPageAssets } from '@/assets/assets'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const {iconContents}=adminPageAssets
  const [blogDetails,setBlogDetails]=useState([])
  const fetchBlogs=async () => {
    const response=await axios.get('/api/blog');
    console.log(response);
    setBlogDetails(response.data.blogs); 
  }
  useEffect(()=>{
    fetchBlogs();
  },[])
  return (
    <section>
      <h1 className='text-2xl font-medium text-center py-1.5'>Welcome Back Admin &#128075;</h1>


      <div className='flex flex-col items-center shadow-xl w-max rounded-md px-4 py-6 border-[1px] border-gray-300 '>
        <div>
          <iconContents.bookIcon className=' text-blue-700 text-3xl'/>
        </div>
        <h2 className='text-xl text-gray-500 font-medium'>Total Blogs Created</h2>
        <p className='text-xl font-bold text-blue-700'>{blogDetails.length}</p>
      </div>
    </section>
  )
}

export default page