
import { useEffect, useState } from 'react'
import { FETCH_VIDEO_API } from '../Utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

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
    // console.log(apiData)
    return (
        <div className='flex flex-wrap'>
            {apiData?.map(item => {

                return (
                    <Link to={"/watch?v=" + item?.id}>
                        <VideoCard videoinfo={item} key={item?.id} />
                    </Link>
                )
            })}
        </div>

    )
}

export default VideosContainer