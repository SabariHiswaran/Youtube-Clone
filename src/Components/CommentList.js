import React, { useState } from 'react'
import Comment from './Comment'

import {  MdArrowDropUp } from 'react-icons/md'

const CommentList = ({ commentsData }) => {


  return (
    commentsData?.map((item) => {

      return (
        <div key={item.id} className="mt-4">
          <Comment commentData={item} />
          {item.replies.length === 0 ?
            ""
            :
            <div className='ml-14 w-[935px] h-[10px] '>

              <button
                className='text-blue flex items-center hover:bg-blue-100 hover:rounded-md pr-2 pl-1'
              >

                <span className='text-[#065fd4] font-semibold'>

                  <MdArrowDropUp />
                </span>

                <span className='text-[#065fd4] ml-1 font-semibold'>
                  {item.replies.length}
                </span>

                <span className='text-[#065fd4] ml-1 font-semibold'>
                  reply
                </span>

              </button>

            </div>

          }


          <div className='ml-7 w-[935px] '>
            {item.replies && <CommentList commentsData={item.replies} />}
          </div>

        </div>
      )
    })
  )
}

export default CommentList