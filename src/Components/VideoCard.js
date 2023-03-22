
import React from 'react'

import TimeAgo from 'react-timeago'

const VideoCard = ({ videoinfo }) => {

  console.log(videoinfo)

  const { snippet, statistics } = videoinfo

  const { thumbnails, title, channelTitle , publishedAt } = snippet

  const { viewCount } = statistics

  const realviews = (view) => {
    return view < 1000
      ? view
      : view > 1000 && view < 1000000
      ? (view / 1000).toFixed(0) + "K"
      : (view / 1000000).toFixed(1) + "M";
  };

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
          <div className='flex items-center'>
            <span> {realviews(viewCount)} views</span>
            <span className='ml-2'>  &#8729; </span>
            <span  className='ml-2'> <TimeAgo date={publishedAt} /> </span>
             </div>
        </div>
      </div>
      </div>

  )
}

export default VideoCard