import React from 'react'
import Comment from './Comment'

import {MdArrowDropDown} from 'react-icons/md'

const CommentList = ( {commentsData}) => {
   
  return( 
    commentsData?.map ((item) => {
       
            return (
                <div key={item.id} className="mt-4">
                <Comment  commentData = {item} />
                {item.replies.length ===0 ?
                  ""
                  :
                  <div className='ml-14 w-[935px] h-[10px] '>
                    <button className='text-blue flex items-center '>
                      <span className='text-[#065fd4] font-bold'>
                       <MdArrowDropDown/>  
                       </span>
                       <span className='text-[#065fd4] ml-2 font-bold'>
                        {item.replies.length}
                       </span>
                       <span className='text-[#065fd4] ml-1 font-bold'>
                       Replies
                       </span>
                       </button>
                  </div>
                  
                }
                <div className='ml-7 w-[935px] '>
                 {item.replies && <CommentList commentsData={item.replies}/>}
                </div>
               
                </div>
            )
        })
  )
}

export default CommentList