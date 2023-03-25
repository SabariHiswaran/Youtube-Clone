import React from 'react'
import Comment from './Comment'

const CommentList = ( {commentsData}) => {
   
  return( 
    commentsData?.map ((item) => {
       
            return (
                <div key={item.id} className="mt-4">
                <Comment  commentData = {item} />
                <div className='pl-5  w-[935px]'>
                 {item.replies && <CommentList commentsData={item.replies}/>}
                </div>
                </div>
            )
        })
  )
}

export default CommentList