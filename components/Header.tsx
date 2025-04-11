'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { toast } from 'sonner'
import axios from 'axios'
const Header = () => {
  const [email,setEmail]=useState('');
  const onSubmitHandler=async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData=new FormData()
    formData.append('email',email)
    const response=await axios.post('/api/email',formData);
    if(response.data.success){
      toast.success(response.data.message)
      setEmail('')
    }else{
      toast.error(response.data.message)
    }
  }
  return (
    <div>

    <nav className='py-5 mx-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} alt="logo" 
        width={100} className='w-[130px] sm:w-auto'/>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000]'>Get Started
          <Image src={assets.arrow} alt='arrow' width={20}/>
        </button>
      </div>
    </nav>
    <div className='text-center my-8'>
    <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blog</h1>
    <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-sm md:text-lg lg:text-xl' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dignissimos voluptatum voluptatibus eum delectus fugit aut enim. Velit corporis voluptatibus molestiae ipsam! Deleniti tenetur quas accusamus magnam, doloremque reiciendis exercitationem? </p>
    <form action="" onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000]'>
      <input type="email" name="" id="" className='pl-4 outline-none' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
      <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
    </form>
    </div>
    </div>

  )
}

export default Header