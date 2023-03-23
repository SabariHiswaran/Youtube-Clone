import React from 'react'

import { SlLike, SlDislike } from 'react-icons/sl'

import { TbShare3 } from 'react-icons/tb'

import {HiScissors} from 'react-icons/hi'

import {MdOutlinePlaylistAdd} from 'react-icons/md'

import {BsThreeDots} from "react-icons/bs"

const ChannelDetails = ({ channelTitle, channelImage,viewCount , likeCount }) => {


    
  const realviews = (view) => {
    return view < 1000
      ? view
      : view > 1000 && view < 1000000
      ? (view / 1000).toFixed(0) + "K"
      : (view / 1000000).toFixed(1) + "M";
  };


    return (
        <div className='mt-7 flex items-center w-[935px]'>

            <div className='flex items-start'>
                <div className='w-[40px]'>
                    <img src={channelImage} className="rounded-full h-11" alt="channelimage" />
                </div>
                <div className='ml-3'>
                    <p className='font-bold'> {channelTitle} </p>
                    <p> {realviews(viewCount)} Subscribers</p>
                </div>
            </div>

            <div className='mr-auto '>
                <button className=' ml-4 pl-3 pr-3 pt-1 pb-1 rounded-md bg-black text-white'> Subscribe </button>
            </div>

            <div className=' flex'>

                <div className='flex'>
                <div >
                    <button className='bg-gray-200 w-[76px] rounded-l-md flex items-center  h-[33px]'>
                        <span className='ml-2'><SlLike /></span>
                        <span className='ml-2' > {realviews(likeCount)} </span>
                    </button>
                </div>
                <div>
                    <button className='bg-gray-200 w-[50px]  rounded-r-md h-[33px] flex justify-center items-center'><SlDislike /></button>
                </div>
                </div>

                <div className='ml-4'>
                    <button className='bg-gray-200 w-[76px] rounded-md flex items-center  h-[33px]'>
                        <span className='ml-2 ' ><TbShare3 /></span>
                        <span className='ml-2 pr-2' >Share</span>
                    </button>
                </div>

                
                <div className='ml-4'>
                    <button className='bg-gray-200 w-[76px] rounded-md flex items-center  h-[33px]'>
                        <span className='ml-2' ><HiScissors /></span>
                        <span className='ml-2' >Clip</span>
                    </button>
                </div>

                <div className='ml-4'>
                    <button className='bg-gray-200 w-[76px] rounded-md flex items-center  h-[33px]'>
                        <span className='ml-2' ><MdOutlinePlaylistAdd /></span>
                        <span className='ml-2' >Save</span>
                    </button>
                </div>

                <div className='ml-4'>
                    <button className='bg-gray-200 w-[37px] rounded-[50%] flex justify-center items-center h-[33px]'>
                        <span ><BsThreeDots /></span>
                    </button>
                </div>

            </div>
        </div>

        
    )
}

export default ChannelDetails