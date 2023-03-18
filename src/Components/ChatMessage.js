import React from 'react'

import {CgProfile} from 'react-icons/cg'

const ChatMessage = ({message}) => {
  return (
    <div className='flex items-center p-3'>
        <span className='text-lg'><CgProfile/> </span>
        <h2 className='text-bold text-gray-700 text-xs pl-2'> {message.profilename} </h2>
        <p className='text-xs pl-3'>{message.comment} </p>
    </div>
  )
}

export default ChatMessage