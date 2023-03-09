
import React from 'react'

const VideoCard = ({videoinfo}) => {
   
    const {snippet, statistics} = videoinfo

    const {thumbnails,title,channelTitle} = snippet

    const { viewCount } = statistics

  return (
    
    <div className='p-2 ml-8 mt-5 w-72 hover:cursor-pointer'>
        <img src={thumbnails?.medium?.url} alt={`${title}.png`} className="rounded-xl"/>
        <h3 className='font-bold text-sm'>{title} </h3>
        <p> {channelTitle}</p>
        <p> {viewCount} views</p>
    </div>
  
  )
}

export default VideoCard