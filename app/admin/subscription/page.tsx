import SubsTableItem from '@/components/admin/SubsTableItem'
import React from 'react'

const page = () => {
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
        <h1>All subscriptions</h1>
        <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
            <table className='w-full tex-sm text-left text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr className='px-6 py-3 '>
                        <th className='px-6 py-3' scope="col" >
                            Email subscription
                        </th>
                        <th className='hidden sm:block px-6 py-3' scope="col" >
                            Date
                        </th>
                        <th className='px-6 py-3' scope="col" >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <SubsTableItem />
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default page