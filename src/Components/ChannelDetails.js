import React from 'react'

import {SlLike,SlDislike} from 'react-icons/sl'

const ChannelDetails = ({ channelTitle,channelImage }) => {
    return (
        <div className='mt-7 flex items-center w-[935px]'>
            
            <div className='flex items-start'>
                <div className='w-[40px]'>
                    <img src={channelImage} className="rounded-full h-11" alt="channelimage" />
                </div>
                <div className='ml-3'>
                    <p className='font-bold'> {channelTitle} </p>
                    <p> 12K Subscribers</p>
                </div>
            </div>
            
            <div>
                <button className=' ml-4 pl-3 pr-3 pt-1 pb-1 rounded-xl bg-black text-white'> Subscribe </button>
             </div>

        <div className='mr-auro'>
                <button className='bg-gray-300 w-[76px] rounded-l-lg border border-r-2 border-gray-200'><SlLike/>62K</button>
                <button className='bg-gray-300 w-[50px] p-3 rounded-r-lg'><SlDislike/></button>
            </div>
        </div>
    )
}

export default ChannelDetails