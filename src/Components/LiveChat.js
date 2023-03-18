import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { livechat } from '../Utils/chatSlice'
import ChatMessage from './ChatMessage'
import { generate, makeid } from './helper'

const LiveChat = () => {


    const selector = useSelector((store) => store.livechat.chatMessages)

    const dispatch = useDispatch()

    console.log(selector)

    useEffect(() => {

        setInterval(handleMessage, 2000)

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
            <h1 className='text-bold'> Live Chat </h1>
            <div className="flex-col-reverse">
                <ChatMessage message={
                    {
                        profilename: "Sabari Hiswaran",
                        comment: " THis is Youtube Live Chat"
                    }
                }
                />
            </div>
        </>
    )
}

export default LiveChat