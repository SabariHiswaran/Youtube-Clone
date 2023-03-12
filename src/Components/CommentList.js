import React from 'react'
import Comment from './Comment'

const CommentList = ( {commentsData}) => {
   
  return( 
    commentsData?.map ((item,index) => {
       
            return (
                <div key={index}>
                <Comment  commentData = {item} />
                <div className='pl-5 border border-l-black'>
                 {item.reply && <CommentList commentsData={item.reply}/>}
                </div>
                </div>
            )
        })
  )
}

export default CommentList