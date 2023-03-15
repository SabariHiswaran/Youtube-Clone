import React from 'react'

const VideoShimmer = () => {
  return (
    <>
    {Array(50).fill("").map((items,index) => {
        return (
            <div className='flex flex-wrap ml-10'>
            <div className='p-2 ml-8 mt-10 w-[360px] bg-gray-100 rounded-xl  h-[190px] hover:cursor-pointer'>
            </div>
        
            <div className='flex items-start justify-between mt-3 w-[360px]'>
            <div className='w-[40px] '>
              <img src="" className="rounded-[50%] h-10 bg-gray-100" alt="" />
            </div>
            <div className='w-[320px] ml-3'>
              <h3 className='bg-gray-100'> </h3>
              <p  className='bg-gray-100'> </p>
          
            </div>
          </div>
          </div>
        )
    }
)}
    </>
  )
}

export default VideoShimmer