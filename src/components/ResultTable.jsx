import React, { useEffect, useState } from 'react'
import { getDataFromServer } from '../helper/helper'

const ResultTable = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        getDataFromServer('http://localhost:8800/api/results', (res) => {
        setData(res)
    })
    })

  return (
    <div className='bg-black h-screen mt-10 '>
    <h1 className='text-white text-4xl ml-8 mb-4 '>Score Board</h1>
<div className=" relative overflow-x-auto shadow-md sm:rounded-lg mx-8">
    <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Total Attempts
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                    Total Marks
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            {!data ?? <div>No data found</div>}
             {
                data.map((val,i) => (
                    <tr className="bg-blue-600 border-b border-blue-400">
             <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                 {val?.username || ''}
             </th>
             <td className="px-6 py-4">
                 {val?.attempted || 0}
             </td>
             <td className="px-6 py-4 bg-blue-500">
                {val?.marks || 0}
             </td>
             <td className="px-6 py-4">
                {val?.status || ''}
             </td>
             
         </tr>
          
                ))
             }
            
        </tbody>
    </table>
</div>
    </div>


  )
}

export default ResultTable