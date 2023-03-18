import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { livechat } from '../Utils/chatSlice'
import ChatMessage from './ChatMessage'
import { generate, makeid } from './helper'

const LiveChat = () => {


    const selector = useSelector((store) => store.livechat.chatMessages)

    const dispatch = useDispatch()

    useEffect(() => {

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
            {/* <h1 className='text-bold'> Live Chat </h1> */}
            <div className='w-[410px] h-[528px] ml-8 p-3 border border-gray-400 rounded-md bg-gray-100 overflow-y-scroll flex flex-col-reverse'>
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