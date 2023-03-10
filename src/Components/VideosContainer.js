
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
    return (
        <div className='flex flex-wrap'>
            {apiData?.map(item => {

                return (
                    <Link key={item?.id}  to={"/watch?v=" + item?.id}>
                        <VideoCard videoinfo={item} />
                    </Link>
                )
            })}
        </div>

    )
}

export default VideosContainer