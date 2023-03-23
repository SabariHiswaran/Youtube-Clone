
import { useEffect, useState } from 'react'
import { FETCH_VIDEO_API } from '../Utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import VideoShimmer from './VideoShimmer'

const VideosContainer = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetchVideoData()
    }, [])

    const fetchVideoData = async () => {
    
        const videoData = await fetch(FETCH_VIDEO_API)

        const data = await videoData.json()

        setApiData(data.items)

    }
   
    return apiData.length ===0 ? <VideoShimmer/> : (
        <div className='flex flex-wrap ml-10 mt-2 h-[82vh] overflow-auto scrollbar-thin scrollbar-thumb-[#ff0000] scrollbar-track-gray-100 scrollbar-thumb-rounded-md'>
            {apiData?.map(item => {

                return (
                    <Link key={item?.id} to={"/watch?v=" + item?.id}>
                        <VideoCard videoinfo={item} />
                    </Link>
                )
            })}
        </div>

    )
}

export default VideosContainer