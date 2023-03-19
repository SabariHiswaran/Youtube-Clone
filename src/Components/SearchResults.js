import React,{useState,useEffect} from 'react'

import {MdFilterAlt} from "react-icons/md"
import SearchRelatedVideos from './SearchRelatedVideos'

import {useSearchParams } from "react-router-dom"
import { SEARCHED_VIDEO_LIST } from '../Utils/constants'

import { removeSuggestion } from '../Utils/searchSuggestionSlice'
import { useDispatch } from 'react-redux'

const SearchResults = () => {

    const [searchParam] = useSearchParams()

    const searchQuery = searchParam.get("search_query")

    const [videoList,setVideoList] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        setVideoList([])
        searchedVideoList() 
        dispatch(removeSuggestion())
    } ,[searchQuery]) 

    const searchedVideoList = async () => {
        const videoList =await fetch(SEARCHED_VIDEO_LIST + searchQuery)

        const data = await videoList.json()

        setVideoList(data.items)
    }

    console.log(videoList)

  return (
   
    <div className='p-5 pl-10 w-[1100px]'>

            <button className='flex items-center'>

            <span><MdFilterAlt /> </span>

            <span className='ml-2'>Filter</span> 

            </button>

            <hr className='mt-3'/>

            {
                videoList?.map(item => {
                    return(
                        <SearchRelatedVideos 
                        thumbnail = {item?.snippet?.thumbnails?.medium?.url}
                        channelTitle = {item?.snippet?.channelTitle}
                        description = {item?.snippet?.description}
                        key={item?.snippet?.channelId}
                        />
                    )
                })
          
            }
    </div>

  )
}

export default SearchResults