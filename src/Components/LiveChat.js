import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { livechat } from '../Utils/chatSlice'
import ChatMessage from './ChatMessage'
import { generate, makeid } from './helper'

import { RiArrowDropDownLine } from 'react-icons/ri'
import { CiMenuKebab } from 'react-icons/ci'
import { AiOutlineSend } from 'react-icons/ai'

const LiveChat = () => {

    const [liveChatMessage , setLiveChatMessage] = useState("")

    const selector = useSelector((store) => store.livechat.chatMessages)

    const dispatch = useDispatch()

    useEffect(() => {

        //API Polling

        const messageInterval = setInterval(handleMessage, 2000)

        return () => clearInterval(messageInterval)
    }, [])

    const handleMessage = () => {
        dispatch(livechat(
            {
                profilename: generate(),
                comment: makeid(10)
            }
        ))
    }

    const handleLiveChatMessage = (e) => {
            setLiveChatMessage(e.target.value)
           
    }

    const handleSubmit = () => {
        dispatch(livechat(
            {
                profilename: generate(),
                comment: liveChatMessage
            }
        ))
        setLiveChatMessage("")
    }

    return (
        <>
            <div className='h-[50px] w-[410px] ml-8 p-3 bg-white border border-gray-400 border-b-0 rounded-t-md'>
                <h1 className='text-bold flex items-center'>
                    <span> Top Chat </span>
                    <span className='text-xl mr-auto'> <RiArrowDropDownLine className='hover:cursor-pointer'/></span>
                    <span > <CiMenuKebab className='hover:cursor-pointer'/> </span>
                </h1>
            </div>

            <div className='w-[410px] h-[428px] ml-8 p-3 border border-gray-400  bg-gray-100 overflow-y-scroll flex flex-col-reverse'>
                {selector?.map((item, index) => {
                    return (
                        <ChatMessage message={item} key={index} />
                    )
                })}

            </div>

            <div className='h-[50px] w-[410px] ml-8 p-3 bg-white border border-gray-400 border-t-0 rounded-b-md'>

                    <div className='flex items-center'>
                        <span className='pl-3'>
                            <input 
                            type="text" 
                            placeholder='Say Something' 
                            className=' border border-t-0 border-l-0 border-r-0 border-b-gray-400 w-[330px] placeholder:text-xs focus:outline-none' 
                            value={liveChatMessage}
                            onChange={(e) => handleLiveChatMessage(e)}
                            />
                        </span>
                        <span className='pl-3'>
                            <AiOutlineSend onClick={liveChatMessage.length >0 ? handleSubmit : null} className="hover:cursor-pointer"/>
                        </span>
                    </div>
                

            </div>
        </>
    )
}

export default LiveChat