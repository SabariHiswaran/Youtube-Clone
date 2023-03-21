import React, { useEffect, useState } from 'react'
import { SUGGESTED_VIDEO_LIST } from '../Utils/constants';
import RelatedVideo from './RelatedVideo'
import {Link} from "react-router-dom"
import RelatedVideoShimmer from './RelatedVideoShimmer';

const RelatedVideosListSection = ({Title}) => {

  // const suggestionTitle = Title?.replace(
  //   /[^a-zA-z0-9 ]/g,
  //   ""
  // );
  const suggestionTitle = Title?.split(' ').slice(0,3).join('+');

 console.log(suggestionTitle)
  const [suggestedVideos,setSuggestedVideos] = useState([])
  
  
  useEffect(() => {
    fetchSuggestedVideoDetails()
   
  }, [Title])


  const fetchSuggestedVideoDetails = async () => {
    const data = await fetch(SUGGESTED_VIDEO_LIST + suggestionTitle)
    const json = await data.json()

    setSuggestedVideos(json.items)
  }

   console.log(suggestedVideos)

  return Title ? <RelatedVideoShimmer/> : (
    <div>

      {suggestedVideos.map(item => {
        return(
          <Link key={item?.id?.videoId}>
          <RelatedVideo
          thumbnail = {item?.snippet?.thumbnails?.medium?.url}
          title = {item?.snippet?.title}
          channelTitle = {item?.snippet?.channelTitle}
          />
          </Link>
        )
      })}

     
   
    </div>
  )
}

export default RelatedVideosListSection