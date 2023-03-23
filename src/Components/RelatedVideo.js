import React from 'react'

import Timeago from 'react-timeago'

const RelatedVideo = ({thumbnail,title,channelTitle,publishedAt}) => {

  


  return (
    <div className='flex w-[410px] h-[100px] mt-8' >

        <div className='w-[160px] h-[100px]'>
            <img src={thumbnail} alt='thumbnail' className='h-[100px] w-[160px] rounded-md'/>
        </div>

        <div className='w-[250px] pl-2 h-[100px]'>

                <h1 className='font-medium' >{title?.length > 40 ? `${title?.substr(0,40)}...` : title } </h1>
                <p className='text-xs text-gray-500'> {channelTitle} </p>
                <p className='text-xs text-gray-500'><Timeago date={publishedAt} /> </p>
                <button className='bg-gray-200  pl-2 pr-2  rounded-sm text-xs '> New </button>

        </div>


    </div>
  )
}

export default RelatedVideo