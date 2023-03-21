import React from 'react'


const RelatedVideo = ({thumbnail,title,channelTitle}) => {
  return (
    <div className='flex w-[410px] h-[90px] mt-8' >

        <div className='w-[160px] h-[90px]'>
            <img src={thumbnail} alt='thumbnail' className='h-[90px] w-[160px] rounded-md'/>
        </div>

        <div className='w-[250px] pl-2 h-[90px]'>

                <h1 className='font-medium' >{title?.length > 40 ? `${title?.substr(0,40)}...` : title } </h1>
                <p className='text-xs text-gray-500'> {channelTitle} </p>
                <p className='text-xs text-gray-500'> 11M Views</p>
                <button className='bg-gray-200  pl-2 pr-2  rounded-sm text-sm font-sans'> New </button>

        </div>


    </div>
  )
}

export default RelatedVideo