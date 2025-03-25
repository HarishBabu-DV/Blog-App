import SideBar from '@/components/admin/SideBar'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { Space_Mono } from 'next/font/google'

const layout = ({children}:{
    children:React.ReactNode;
}) => {
  return (
    <>
        <div className='flex'>
            <SideBar /> 
            <div className='flex flex-col w-full'>
                <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black'>
                    <h3 className='font-medium'>Admin Panel</h3>
                    <Image src={assets.profile_icon} alt='profile' width={40} />
                </div>
                {children}
            </div>
        </div>
    </>
  )
}

export default layout