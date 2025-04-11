import React from 'react'

const SubsTableItem = () => {
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            harishbabudv2002@gmail.com
        </th>
        <td className='px-6 py-4 max-sm:hidden'>23/32/2025</td>
        <td className='px-6 py-4 cursor-pointer'>X</td>
    </tr>
  )
}

export default SubsTableItem