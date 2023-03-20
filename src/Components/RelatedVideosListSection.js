import React, { useEffect, useState } from 'react'
import { SUGGESTED_VIDEO_LIST } from '../Utils/constants';
import RelatedVideo from './RelatedVideo'

const RelatedVideosListSection = ({Title}) => {


  const suggestionTitle = Title?.split(' ').slice(0,1);

  console.log(suggestionTitle)
  const [suggestedVideos,setSuggestedVideos] = useState([])
  
  
  useEffect(() => {
    fetchSuggestedVideoDetails()
  }, [])


  const fetchSuggestedVideoDetails = async () => {
    const data = await fetch(SUGGESTED_VIDEO_LIST + suggestionTitle)
    const json = await data.json()

    setSuggestedVideos(json.items)
  }

  console.log(suggestedVideos)

  return (
    <div>
      <RelatedVideo/>
      <RelatedVideo/>
      <RelatedVideo/>
      <RelatedVideo/>
      <RelatedVideo/>
      <RelatedVideo/>
      <RelatedVideo/>
    </div>
  )
}

export default RelatedVideosListSection