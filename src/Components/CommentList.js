import React from 'react'
import Comment from './Comment'

const CommentList = ( {commentsData}) => {
   
  return( 
    commentsData?.map ((item) => {
       
            return (
                <div key={item.id} className="mt-4">
                <Comment  commentData = {item} />
                <div>
                <div className='pl-5 ml-14  w-[935px] border-0 border-l-2 border-l-red-600'>
                 {item.replies && <CommentList commentsData={item.replies}/>}
                </div>
                </div>
                </div>
            )
        })
  )
}

export default CommentList