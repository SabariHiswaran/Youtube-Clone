import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/menuSlice'

import { useSearchParams } from 'react-router-dom'
import { GOOGLE_API_KEY, INDIVIDUAL_VIDEO_API } from '../Utils/constants'

import CommentsContainer from './CommentsContainer'
import ChannelDetails from './ChannelDetails'

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
    <div className=' mt-4 w-[935px]'>
      <iframe
        width="100%"
        height="528"
        src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>

      </iframe>

      <h1 className='mt-3 uppercase font-medium text-xl '> {watchVideoDetails[0]?.snippet?.title} </h1>

      <ChannelDetails channelTitle ={watchVideoDetails[0]?.snippet?.channelTitle} />

      <CommentsContainer/>



    </div>
  )
}

export default WatchPage