import React from 'react'
import Comment from './Comment'

const CommentList = ( {commentsData}) => {
   
  return( 
    commentsData?.map ((item,index) => {
        console.log(item)
            return (
                <div>
                <Comment  commentData = {item} key={index}/>
                <div className='pl-5 border border-l-black'>
                 {item.reply && <CommentList commentsData={item.reply}/>}
                </div>
                </div>
            )
        })
  )
}

export default CommentList