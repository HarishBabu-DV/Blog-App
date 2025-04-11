import { NextResponse } from 'next/server';
import {connectDB} from '../../../lib/config/db'
import EmailModel from '../../../lib/models/EmailModel';

const loadDB=async ()=>{
    await connectDB();
}

loadDB();

export async function POST(request){
    try {
        const formData=await request.formData()
        const email={
            email:`${formData.get('email')}`
        }
        await EmailModel.create(email);
        console.log('Email added successfully');
        return NextResponse.json({
            success:true,
            message:'Email added successfully'
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"Database error"
        })
    }
}