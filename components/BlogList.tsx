'use client'
import { blog_data } from '@/assets/assets'
import React, { useState } from 'react'
import BlogCard from './BlogCard'

const BlogList = () => {
    const [menu,setMenu]=useState('All')
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
            {
                blog_data.filter((item)=>menu === 'All' ? true : item.category === menu).map((itemName,index)=>(
                    <BlogCard key={index} data={itemName}/>
                ))
            }
        </div>
    </div>
  )
}

export default BlogList
const blogCat=["All","Technology","Startup","Lifestyle"]