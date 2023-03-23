import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/menuSlice'

import { useSearchParams } from 'react-router-dom'
import { GOOGLE_API_KEY, INDIVIDUAL_VIDEO_API } from '../Utils/constants'

import CommentsContainer from './CommentsContainer'
import ChannelDetails from './ChannelDetails'
import Description from './Description'
import LiveChat from './LiveChat'
import RelatedVideosListSection from './RelatedVideosListSection'
import RelatedVideoShimmer from './RelatedVideoShimmer'


const WatchPage = () => {

  const [watchVideoDetails, setWatchVideoDetails] = useState([])

  //  const {snippet , statistics } = watchVideoDetails

  //  const {title, description ,channelTitle } = snippet

  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()

  useEffect(() => {
    
    dispatch(closeMenu())
    fetchVideoDetails()
  }, [searchParams])

  console.log(watchVideoDetails)

  const fetchVideoDetails = async () => {

    console.log("individual api called")
    const data = await fetch(INDIVIDUAL_VIDEO_API + searchParams.get("v") + "&key=" + GOOGLE_API_KEY)
    const json = await data.json()

    setWatchVideoDetails(json.items)
  }
 


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

        <div>

          <LiveChat />

        </div>

      </div>
      
      <div className='flex w-[1385px]'>

      <div className='w-[935px]'>
      <h1 className='mt-3 font-medium text-xl '> {watchVideoDetails[0]?.snippet?.title} </h1>

      <ChannelDetails
        channelTitle={watchVideoDetails[0]?.snippet?.channelTitle}
        channelImage={watchVideoDetails[0]?.snippet?.thumbnails?.default?.url}
      />

      <Description description={watchVideoDetails[0]?.snippet?.description} />

      <CommentsContainer />

      </div>
      
      <div className='ml-8 mt-4'>
         {
          !watchVideoDetails[0] ?<RelatedVideoShimmer/>: <RelatedVideosListSection watchVideoDetails={watchVideoDetails[0]}/>
         } 

      </div>

      </div>


    </div>
  )
}

export default WatchPage