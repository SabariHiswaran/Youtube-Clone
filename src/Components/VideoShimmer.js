import React from 'react'

const VideoShimmer = () => {
  return (
    <div className='flex flex-wrap ml-10'>
    {Array(50).fill("").map((items,index) => {
        return (
            <div className='p-2 ml-8 mt-10 w-[360px] ' key={index}>
            <div className="rounded-xl bg-gray-300  w-[360px] h-[200px]" >
            </div>
            <div className='flex items-start justify-between mt-3 w-[360px]'>
            <div className='w-[40px] '>
              <img src="" className="rounded-[50%] h-10 bg-gray-300" alt="" />
            </div>
            <div className='w-[320px] ml-3'>
              <h3 className='font-bold text-sm bg-gray-300 w-[250px] h-[20px]'> </h3>
              <p className='bg-gray-300 mt-3 w-[200px] h-[20px]'> </p>
            </div>
          </div>
          </div>
         
        )
    }
)}
     </div>
  )
}

export default VideoShimmer