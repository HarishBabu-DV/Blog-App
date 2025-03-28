require('dotenv').config();
const { NextResponse }=require('next/server')
const fs=require('fs')
import { writeFile } from 'fs/promises';
import { connectDB } from '../../../lib/config/db';
import { title } from 'process';
import BlogModel from '../../../lib/models/BlogModel';

const loadDB=async ()=>{
    await connectDB();
};
loadDB();

export async function POST(request){
    //getting data from client side form of formdata
    const formData=await request.formData();
    //adding timestamp to mention image file
    const timestamp=Date.now();
    //getting image from formdata
    const image=formData.get('image');
    //converting image buffer
    const imageByteData=await image.arrayBuffer();
    //converting buffer to buffer 
    const buffer=Buffer.from(imageByteData)
    //adding timestamp to mention image file
    const path=`./public/${timestamp}_${image.name}`;
    //writing image to public folder
    await writeFile(path,buffer)
    //getting image url
    const imgUrl=`/${timestamp}_${image.name}`

    const blogData={
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImg:`${formData.get('authorImg')}`
    };
    try {
        await BlogModel.create(blogData);
        console.log('Blog created successfully');
        return NextResponse.json({
            success:true,
            message:'Blog Created Successfully'
        });
    } catch (error) {
        console.log(`Database error: ${error.message}`);
        return NextResponse.json({
            success:false,
            message:`Database error : ${error.message}`
        });
    }
}
export async function GET(request) {
    const blogId=request.nextUrl.searchParams.get('id')
    if(blogId){
        const blog=await BlogModel.findById(blogId);
        //single document typr object
        return NextResponse.json(blog)
    }else{
        const blogs=await BlogModel.find();
        return NextResponse.json({blogs});
    }
}