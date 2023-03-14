
import React from 'react'

const VideoCard = ({ videoinfo }) => {

  const { snippet, statistics } = videoinfo

  const { thumbnails, title, channelTitle } = snippet

  const { viewCount } = statistics


  return (

      <div className='p-2 ml-8 mt-10 w-[360px]  hover:cursor-pointer'>
        <img src={thumbnails?.medium?.url} alt={`${title}.png`} className="rounded-xl  w-[360px] " />
        <div className='flex items-start justify-between mt-3 w-[360px]'>
        <div className='w-[40px] '>
          <img src={thumbnails.default.url} className="rounded-[50%] h-10 bg-cover" alt="video" />
        </div>
        <div className='w-[320px] ml-3'>
          <h3 className='font-bold text-sm'>{title} </h3>
          <p> {channelTitle}</p>
          <p> {viewCount} views</p>
        </div>
      </div>
      </div>

  )
}

export default VideoCard