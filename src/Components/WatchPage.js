import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/menuSlice'

import { useSearchParams } from 'react-router-dom'
import { GOOGLE_API_KEY, INDIVIDUAL_VIDEO_API } from '../Utils/constants'

import CommentsContainer from './CommentsContainer'
import ChannelDetails from './ChannelDetails'
import Description from './Description'
import LiveChat from './LiveChat'

const WatchPage = () => {

  const [watchVideoDetails, setWatchVideoDetails] = useState([])

  //  const {snippet , statistics } = watchVideoDetails

  //  const {title, description ,channelTitle } = snippet

  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()

  useEffect(() => {

    dispatch(closeMenu())
    fetchVideoDetails()
  }, [])

  const fetchVideoDetails = async () => {
    const data = await fetch(INDIVIDUAL_VIDEO_API + searchParams.get("v") + "&key=" + GOOGLE_API_KEY)
    const json = await data.json()

    setWatchVideoDetails(json.items)
  }
  console.log(watchVideoDetails)


  return (
    <div className=' mt-4 w-[1385px]'>
      <div className='flex'>
        <div className='w-[935px]'>
          <iframe
            width="100%"
            height="528"
            src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>

          </iframe>
        </div>

        <div className='w-[410px] h-[528px] ml-8 p-3 border border-gray-400 rounded-md bg-gray-100'>
          <LiveChat />
        </div>
      </div>
      <h1 className='mt-3 font-medium text-xl '> {watchVideoDetails[0]?.snippet?.title} </h1>

      <ChannelDetails
        channelTitle={watchVideoDetails[0]?.snippet?.channelTitle}
        channelImage={watchVideoDetails[0]?.snippet?.thumbnails?.default?.url}
      />

      <Description description={watchVideoDetails[0]?.snippet?.description} />

      <CommentsContainer />



    </div>
  )
}

export default WatchPage