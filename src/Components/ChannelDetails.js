import React from 'react'

import { SlLike, SlDislike } from 'react-icons/sl'

import { TbShare3 } from 'react-icons/tb'

const ChannelDetails = ({ channelTitle, channelImage }) => {
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

            <div className='mr-auto '>
                <button className=' ml-4 pl-3 pr-3 pt-1 pb-1 rounded-xl bg-black text-white'> Subscribe </button>
            </div>

            <div className=' flex'>

                <div className='flex'>
                <div >
                    <button className='bg-gray-300 w-[76px] rounded-l-lg flex items-center  h-[33px]'>
                        <span className='ml-2'><SlLike /></span>
                        <span className='ml-2' >62K</span>
                    </button>
                </div>
                <div>
                    <button className='bg-gray-300 w-[50px]  rounded-r-lg h-[33px] flex justify-center items-center'><SlDislike /></button>
                </div>
                </div>

                <div className='ml-4'>
                    <button className='bg-gray-300 w-[76px] rounded-lg flex items-center  h-[33px]'>
                        <span className='ml-2' ><TbShare3 /></span>
                        <span className='ml-2' >Share</span>
                    </button>
                </div>




            </div>
        </div>
    )
}

export default ChannelDetails