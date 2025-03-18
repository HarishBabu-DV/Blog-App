import React from 'react'
import Image from 'next/image'
type DataProps={
    id:number;
    title:string;
    description:string;
    image:string;
    category:string;
    author:string;
    author_tag:string;
}
const BlogCard = ({data}:{data:DataProps}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] border bg-white border-black hover:shadow-[-7px_7px_0px_#000]' >
        <Image src={data.image} alt={data.title} width={400} height={400} />
    </div>
  )
}

export default BlogCard