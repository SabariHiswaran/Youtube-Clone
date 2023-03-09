
import {useEffect, useState} from 'react'
import { FETCH_VIDEO_API } from '../Utils/constants'

const VideosContainer = () => {
    
    const [apiData , setApiData ] =useState([])

    useEffect(() => {
        fetchVideoData()
    }, [])

    const fetchVideoData = async () => {

        const videoData =await fetch(FETCH_VIDEO_API)

        const data = await videoData.json()

        setApiData(data.items)

    }
    console.log(apiData)
    return (
        <div className='flex'>
            {apiData.map(item => {
                return (
                    <div className='p-5 '>
                    <img src={item?.snippet?.thumbnails?.medium?.url} alt="thumbnail" className='rounded-xl'/>
                    <h3 className='font-bold text-sm'>{item?.snippet?.localized?.title} </h3>
                    <p> {item?.snippet?.channelTitle}</p>
                </div>
                )
            })}
         </div>

    )
}

export default VideosContainer