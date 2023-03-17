import React from 'react'


const SearchRelatedVideos = ({thumbnail,channelTitle,description}) => {

    const shortDescription = description?.substr(0,150)

    return (
        <div className='p-5 pl-10 flex mt-3 w-[1000px] h-[220px]'>

            <div className='w-[400px] '>

                <img src={thumbnail} alt="thumbnailimage" className='w-[400px] h-[220px] rounded-lg' />

            </div>

            <div className='ml-5 w-[600px]'>

                <h2 className='font-semibold'> {channelTitle} </h2>

                <p className='font-normal text-sm text-gray'> 11M Views</p>

                <div className=' w-[150px] flex mt-2 items-center'>

                    <img src={thumbnail} className="rounded-[50%] h-8 w-[35px] bg-cover" alt="video" />

                    <p className='ml-2 font-normal text-sm text-gray'> {channelTitle} </p>

                  
                </div>

                <p className='mt-3 font-normal text-sm text-gray'> {shortDescription}...</p>

                <button className='bg-gray-200 pl-2 pr-2 mt-3 rounded-sm text-sm font-sans'> New </button>
            </div>


        </div>
    )
}

export default SearchRelatedVideos