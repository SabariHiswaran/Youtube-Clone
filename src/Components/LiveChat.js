import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { livechat } from '../Utils/chatSlice'
import ChatMessage from './ChatMessage'
import { generate, makeid } from './helper'

import {RiArrowDropDownLine} from 'react-icons/ri'
import {CiMenuKebab} from 'react-icons/ci'

const LiveChat = () => {


    const selector = useSelector((store) => store.livechat.chatMessages)

    const dispatch = useDispatch()

    useEffect(() => {

        //API Polling

      const messageInterval =   setInterval(handleMessage, 2000)

        return () => clearInterval(messageInterval)
    },[])

    const handleMessage = () => {
        dispatch(livechat(
            {
                profilename: generate(),
                comment: makeid(10)
            }
        ))
    }

    return (
        <>
            <div className='h-[50px] w-[410px] ml-8 p-3 bg-white border border-gray-400 border-b-0 rounded-t-md'>
            <h1 className='text-bold flex items-center'> 
                <span> Top Chat </span>
               <span className='text-xl mr-auto'> <RiArrowDropDownLine/></span>
               <span > <CiMenuKebab/> </span>
                </h1> 
                </div>
            <div className='w-[410px] h-[428px] ml-8 p-3 border border-gray-400 rounded-b-md bg-gray-100 overflow-y-scroll flex flex-col-reverse'>
                {selector?.map((item,index) => {
                    return (
                        <ChatMessage message={ item } key={index}/>
                    )
                })}
               
            </div>
        </>
    )
}

export default LiveChat