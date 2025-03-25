import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
            <Image src={assets.logo} alt='logo' width={120} />
        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
            <div className='w-1/2 sm:w-[80%] absolute right-0 '>
                <Link href={'/admin/addBlog'} className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                    <Image src={assets.add_icon} alt='added section' width={28}/>
                        <p className='max-sm:hidden'>Add Blogs</p>
                </Link>
                <Link href={'/admin/addProduct'} className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                    <Image src={assets.add_icon} alt='added section' width={28}/>
                        <p className='max-sm:hidden'>Blog Lists</p>
                </Link>
                <Link href={'/admin/addProduct'} className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                    <Image src={assets.add_icon} alt='added section' width={28}/>
                        <p className='max-sm:hidden'>Subscription</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SideBar