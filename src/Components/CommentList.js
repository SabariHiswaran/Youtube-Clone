import React from 'react'
import Comment from './Comment'

const CommentList = ( {commentsData}) => {
   
  return( 
    commentsData?.map ((item,index) => {
       
            return (
                <div key={index} className="mt-4">
                <Comment  commentData = {item} />
                <div className='pl-5  w-[935px]'>
                 {item.reply && <CommentList commentsData={item.reply}/>}
                </div>
                </div>
            )
        })
  )
}

export default CommentList