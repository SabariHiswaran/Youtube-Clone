import React from 'react'

import dasara from "../Images/dasara.jpg"

const SearchRelatedVideos = ({videosInfo}) => {

    const {thumbnail , channelId, description,channelTitle } = videosInfo

    const shortDescription = description.substr(0,20)

    return (
        <div className='p-5 pl-10 flex mt-3'>

            <div className='w-[360px]'>

                <img src={thumbnail.default.url} alt="image" className='w-[360px] rounded-lg' />

            </div>

            <div className='ml-5'>

                <h2 className='font-semibold'> {channelTitle} </h2>

                <p className='font-normal text-sm text-gray'> 11M Views</p>

                <div className=' w-[150px] flex mt-2 items-center'>

                    <img src={thumbnail.default.url} className="rounded-[50%] h-8 w-[35px] bg-cover" alt="video" />

                    <p className='ml-2 font-normal text-sm text-gray'> {channelTitle} </p>

                  
                </div>

                <p className='mt-3 font-normal text-sm text-gray'> {shortDescription}...</p>

                <button className='bg-gray-200 pl-2 pr-2 mt-3 rounded-sm text-sm font-sans'> New </button>
            </div>


        </div>
    )
}

export default SearchRelatedVideos