'use client'
import { blog_data } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import axios from 'axios'
import { StaticImageData } from 'next/image'
import Skeleton from './Skeleton'
type BlogProps={
    id:number;
    title:string;
    description:string;
    image:StaticImageData|string;
    date:number;
    category:string;
    author:string;
    author_img:StaticImageData | string;
}
const BlogList = () => {
    const [menu,setMenu]=useState('All')
    const [blogs,setBlogs]=useState<BlogProps[] | null>(null);
    const fetchBlogs=async () => {
        const response=await axios.get('/api/blog');
        console.log(response);
        setBlogs(response.data.blogs); 
    }
    useEffect(()=>{
        fetchBlogs();
    },[])
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            {
                blogCat.map((item,index)=>(
                    <button key={index} className={menu === item ?"bg-black text-white py-1 px-4 rounded-sm" :"py-1 px-4"} onClick={()=>setMenu(item)}>{item}</button>
                ))
            }
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-10 xl:mx-24'>
            {/* {
                blog_data.filter((item)=>menu === 'All' ? true : item.category === menu).map((itemName,index)=>(
                    <BlogCard key={index} data={itemName}/>
                ))
            } */}
            {
                blogs ? blogs.filter((item)=>menu==='All' ? true : item.category === menu).map((item,index)=>(
                    <BlogCard key={index} data={item} />
                ))
                : 
                <>
                    {
                        Array.from({length:6}).map((_,index)=>(
                            <div className='flex ' key={index}>
                               <Skeleton />
                            </div>
                        ))
                    }
                </>
            }
        </div>
    </div>
  )
}

export default BlogList
const blogCat=["All","Technology","Startup","Lifestyle"]