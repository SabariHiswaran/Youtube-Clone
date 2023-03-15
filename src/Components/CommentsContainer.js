import React from 'react'
import CommentList from './CommentList'

import { MdSort } from 'react-icons/md'

const commentsData = [
  {
    profileName: "Sabari Hiswaran ",
    comment: " Amazing Content. Keep it up ",
    reply: [
      {
        profileName: "Sabari Hiswaran ",
        comment: " Amazing Content. Keep it up "
      }
    ]
  },
  {
    profileName: "Sabari Hiswaran ",
    comment: " Amazing Content. Keep it up ",
    reply: [
      {
        profileName: "Sabari Hiswaran ",
        comment: " Amazing Content. Keep it up ",
        reply: [
          {
            profileName: "Sabari Hiswaran ",
            comment: " Amazing Content. Keep it up "
          }
        ]
      }
    ]
  },
  {
    profileName: "Sabari Hiswaran ",
    comment: " Amazing Content. Keep it up ",
    reply: ""
  },
  {
    profileName: "Sabari Hiswaran ",
    comment: " Amazing Content. Keep it up ",
    reply: ""
  },
  {
    profileName: "Sabari Hiswaran ",
    comment: " Amazing Content. Keep it up ",
    reply: ""
  }
]



const CommentsContainer = () => {
  return (
    <div className='mt-5'>

      <div className='flex items-center '>

        <h1 className='font-normal'>20 Comments </h1>

      <div >
        <button className=' w-[76px] rounded-l-xl flex items-center ml-4  h-[33px]'>
          <span className='ml-2'><MdSort /></span>
          <span className='ml-2 font-semibold' >Sort</span>
        </button>
      </div>
      
      </div>

      <p className='mt-3 font-semibold'> Nested Comments Section :</p>

      <CommentList commentsData={commentsData} />

    </div>
  )
}

export default CommentsContainer

