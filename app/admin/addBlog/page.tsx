'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const page = () => {
    const [image,setImage]=useState(false)
    const [data,setData]=useState({
        title:'',
        description:'',
        category:'',
        author:'Alex',
        authorimg:'/author_img.png'
    })
    const onChangeHandle=(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData((data)=>({...data,[name]:value}))
    }
    console.log(data)
  return (
    <>
        <form  action="" className='pt-5 px-5 sm:pt-12 sm:scroll-pl-16'>
            <p className="text-xl font-medium">Upload Thumbnail</p>
            <label htmlFor="image">
                <Image src={assets.upload_area} alt='upload icon' width={140} height={70} className='mt-4'/>                
            </label>
            <input type="file" id="image" hidden required />

            <p className='text-xl mt-4'>Blog Title</p>
            <input type="text" placeholder='Type title here' required name='title' className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-black' onChange={onChangeHandle}/>

            <p className='text-xl mt-4'>Blog Description</p>
            <textarea rows={6} placeholder='Type description here' name='description' required className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-black' />

            <p className='text-xl mt-4'>Blog Category</p>
            <select onChange={onChangeHandle} name='category' className='w-40 mt-4 px-4 py-3 border border-gray-500'>
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            <br />
            <button className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>
        </form>
    </>
  )
}

export default page