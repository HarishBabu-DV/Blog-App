"use client"
import { adminPageAssets } from '@/assets/assets'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Line, ResponsiveContainer, BarChart, Bar, PieChart, Pie} from 'recharts'
const page = () => {
  const {iconContents}=adminPageAssets
  const [blogDetails,setBlogDetails]=useState([])
  const fetchBlogs=async () => {
    const response=await axios.get('/api/blog');
    console.log(response);
    setBlogDetails(response.data.blogs); 
  }
  useEffect(()=>{
    fetchBlogs();
  },[])
  return (
    <section className='flex flex-col gap-5 '>
      <h1 className='text-2xl font-medium text-center py-1.5'>Welcome Back Admin &#128075;</h1>

      {/* Middle Section  */}

      {/* Total Blogs created  */}
      <div className='flex flex-col items-center shadow-xl w-max rounded-md px-4 py-6 border-[1px] border-gray-300 mx-auto'>
        <div>
          <iconContents.bookIcon className=' text-blue-700 text-3xl'/>
        </div>
        <h2 className='text-xl text-gray-500 font-medium'>Total Blogs Created</h2>
        <p className='text-xl font-bold text-blue-700'>{blogDetails.length}</p>
      </div>
      {/* Types of Blogs in Pie Chart  */}
        {/* <div>
          <ResponsiveContainer width={'100%'} height={300}>
              <PieChart  width={500} height={200}>
                  <Pie data={lineChartData} dataKey={'blogCategory'} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label/>
              </PieChart>
          </ResponsiveContainer>
        </div> */}

      {/* Total Number of Blogs by category   */}
      <div className='grid grid-cols-2 gap-2 px-4 items-center'>
        <div className='flex flex-col items-center gap-2'>
          <h2 className='text-2xl font-bold text-orange-500'>Line Chart of Number of Blogs by Category</h2>
          {/*Line Chart of blog category and how many of them was created  */}
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={lineChartData} width={500} height={200}>
              <CartesianGrid />
              <XAxis dataKey={'blogCategory'}/>
              <YAxis />
              <Tooltip />
              <Line dataKey={'value'} type={'monotone'} name='Number of Blogs'/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <h2 className='text-2xl font-bold text-orange-500'>Bar Chart of Number of Blogs by Category</h2>
          {/*Bar Chart of blog category and how many of them was created  */}
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={lineChartData} width={500} height={200}>
              <CartesianGrid />
              <XAxis dataKey={'blogCategory'}/>
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" barSize={30} fill="#8884d8"
          name={'Number of Blogs'}/>
              {/* <Line dataKey={'value'} type={'monotone'} name='Number of Blogs'/> */}
            </BarChart  >
          </ResponsiveContainer>
        </div>
      </div>


    </section>
  )
}

const lineChartData=[
  { value:2,blogCategory:'Technology'},
  { value:2,blogCategory:'Lifestyle'},
  { value:3,blogCategory:'Startup'}
]
export default page