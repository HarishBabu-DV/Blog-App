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


      <div>
        <div>
          <iconContents.bookIcon className='text-3xl'/>
        </div>
        <h2>Total Blogs Created</h2>
        <p>{blogDetails.length}</p>
      </div>
    </section>
  )
}

export default page