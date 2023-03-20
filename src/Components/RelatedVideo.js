import React from 'react'

import dasara from '../Images/dasara.jpg'

const RelatedVideo = () => {
  return (
    <div className='flex w-[410px] h-[90px] mt-4' >

        <div className='w-[160px] h-[90px]'>
            <img src={dasara} alt='thumbnail' className='h-[90px] rounded-md'/>
        </div>

        <div className='w-[250px] pl-2 h-[90px]'>

                <h1 className='font-medium' > Dasara - Official Trailer | Nani |  </h1>
                <p className='text-xs text-gray-500'> Sony Music South </p>
                <p className='text-xs text-gray-500'> 11M Views</p>
                <button className='bg-gray-200  pl-2 pr-2  rounded-sm text-sm font-sans'> New </button>

        </div>


    </div>
  )
}

export default RelatedVideo