import { assets, blog_data } from '@/assets/assets'
import { redirect } from 'next/navigation';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'

type propParams = {
    params: {
        id: string;
    }
}
const page = ({ params }: propParams) => {
    const blog = blog_data.filter((item) => item.id === Number(params.id))[0];
    if (!blog) {
        redirect("/");
    }
    return (
        <>
            {
                blog && (
                    <main className='max-w-[1920px] mx-auto'>
                        <div className='bg-gray-200 py-5 md:px-12 lg:px-28'>
                            <div className='flex justify-between items-center'>
                                <Link href={'/'}>
                                    <Image src={assets.logo}
                                        alt='logo'
                                        width={180}
                                        className='w-[130px] sm:w-auto' />
                                </Link>
                                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]'>
                                    Get Started
                                    <Image src={assets.arrow} alt='arrow' />
                                </button>
                            </div>
                            <div className='text-center my-24'>
                                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{blog.title}</h1>
                                <Image src={blog.author_img} alt='author image'
                                    width={60} height={60} className='mx-auto mt-6 border border-white rounded-full' />
                                <p className='mt-2 pb-2 text-lg max-w-[740px] mx-auto'>{blog.author}</p>
                            </div>
                        </div>
                        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                            <Image src={blog.image}
                                width={1200} height={720} alt='blog image'
                                className='border border-white' />
                            <h1 className='my-8 text-2xl font-semibold'>Introduction</h1>
                            <p className='my-3 text-lg'>
                                {blog.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat inventore, quisquam deleniti laborum voluptatibus pariatur officiis sunt libero accusamus tenetur, culpa odio odit molestiae totam maxime magni perspiciatis, et porro.
                            </p>
                        </div>
                        <div className='my-24 '>
                            <p className='font-semibold my-4 text-black'>
                                Share this article on social media
                            </p>
                            <div className='flex'>

                            <Image src={assets.facebook_icon} alt='facebook icon' width={50}/>
                            <Image src={assets.twitter_icon} alt='twitter icon' width={50}/>
                            <Image src={assets.googleplus_icon} alt='google_plus icon' width={50}/>
                            </div>
                        </div>
                    </main>
                )
            }
        </>
    )
}

export default page