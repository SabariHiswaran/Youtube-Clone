import React from 'react'
import CommentList from './CommentList'


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
    <div>

    <h1 className='font-bold'> Comments </h1>

    <CommentList commentsData = {commentsData} />

    </div>
  )
}

export default CommentsContainer

