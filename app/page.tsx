import BlogList from '@/components/BlogList'
import Header from '@/components/Header'
import React from 'react'
import { Toaster } from 'sonner'

const page = () => {
  return (
    <main className='max-w-[1920px] mx-auto'>
      <Toaster position='top-center' richColors/>
      <Header />
      <BlogList />
    </main>
  )
}

export default page