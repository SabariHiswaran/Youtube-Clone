import React from 'react'

const RelatedVideoShimmer = () => {
  return (
    <div>
   {
    Array(15).fill("").map((item , index) => {
      return (
        <div className='flex w-[410px] h-[90px] mt-8'   key={index}>

        <div className='w-[160px] h-[90px]'>
            <div className="rounded-md h-[90px] w-[160px] bg-gray-300">
            </div>
        </div>

        <div className='w-[250px] pl-2 h-[90px]'>

                <h1 className='bg-gray-300 w-[250px] h-[20px]  mt-2' > </h1>
                <p className='bg-gray-300 w-[150px] h-[20px] mt-2'>  </p>

        </div>


    </div>
      )
    })
   }
   </div>
  )
}

export default RelatedVideoShimmer