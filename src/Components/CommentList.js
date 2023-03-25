import React from 'react'
import Comment from './Comment'

const CommentList = ( {commentsData}) => {
   
  return( 
    commentsData?.map ((item) => {
       
            return (
                <div key={item.id} className="mt-4">
                <Comment  commentData = {item} />
                {item.replies.length ===0 ?
                  ""
                  :
                  <div className='ml-14 w-[935px] h-[30px] border-0 border-l-2 border-l-gray-600'>
                    Replies
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