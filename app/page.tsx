import BlogList from '@/components/BlogList'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <main className='max-w-[1920px] mx-auto'>
      <Header />
      <BlogList />
    </main>
  )
}

export default page