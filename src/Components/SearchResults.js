import React,{useState,useEffect} from 'react'

import {MdFilterAlt} from "react-icons/md"
import SearchRelatedVideos from './SearchRelatedVideos'

import {useSearchParams } from "react-router-dom"
import { SEARCHED_VIDEO_LIST } from '../Utils/constants'

const SearchResults = () => {

    const [searchParam] = useSearchParams()

    const [videoList,setVideoList] = useState()

    useEffect(() => {
        
        searchedVideoList()

    } , [])

    const searchedVideoList = async () => {
        const videoList =await fetch(SEARCHED_VIDEO_LIST + searchParam.get("search_query"))

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


            <SearchRelatedVideos videosInfo = {videoList[0]?.snippet} />

    </div>

  )
}

export default SearchResults