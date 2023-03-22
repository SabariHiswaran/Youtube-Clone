import React, { useEffect, useState } from 'react'
import { SUGGESTED_VIDEO_LIST } from '../Utils/constants';
import RelatedVideo from './RelatedVideo'
import { Link } from "react-router-dom"

const RelatedVideosListSection = ({ watchVideoDetails }) => {


  const suggestionTitle = typeof (watchVideoDetails?.snippet?.title) !== 'undefined' && watchVideoDetails?.snippet?.title?.split(' ').slice(0, 3).join('+');

  const [suggestedVideos, setSuggestedVideos] = useState([])


  useEffect(() => {
    fetchSuggestedVideoDetails()

  }, [])


  const fetchSuggestedVideoDetails = async () => {
    const data = await fetch(SUGGESTED_VIDEO_LIST + suggestionTitle)
    const json = await data.json()

    setSuggestedVideos(json.items)
  }


  return !suggestedVideos ? null : suggestedVideos.length === 0 ? null : (
    <div>

      {suggestedVideos?.map(item => {
        return (
          <Link key={item?.id?.videoId} to={"/watch?v=" + item?.id?.videoId}>
            <RelatedVideo
              thumbnail={item?.snippet?.thumbnails?.medium?.url}
              title={item?.snippet?.title}
              channelTitle={item?.snippet?.channelTitle}
            />
          </Link>
        )
      })}



    </div>
  )
}

export default RelatedVideosListSection