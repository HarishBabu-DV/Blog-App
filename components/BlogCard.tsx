import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import { assets } from '@/assets/assets';
type DataProps={
    _id:number;
    title:string;
    description:string;
    image: string | StaticImageData;
    date:number;
    category:string;
    author:string;
    author_img:string | StaticImageData;
}
const BlogCard = ({category,description,image,title,_id}:{category:string;
  description:string;
  image:string | StaticImageData;
  title:string;
  _id:number | string;
}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] border bg-white border-black hover:shadow-[-7px_7px_0px_#000]' >
        <Image src={image} alt={title} width={400} height={400} />
        <p className='ml-5 mt-5 py-1 px-2 inline-block bg-black text-white text-sm  '>{category}</p>
        <div className='p-5'>
          <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
          <p className='mb-3 text-sm tracking-tight text-gray-700'>{description.slice(0,100)}</p>
          <Link href={`/blog/${_id}`} className='inline-flex items-center py-2 font-semibold text-center'>Read More {" "}
            <Image src={assets.arrow} alt='arrow' width={12} className='ml-2 mt-1'/>
          </Link>
        </div>
    </div>
  )
}

export default BlogCard