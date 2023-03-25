import React from 'react'
import CommentList from './CommentList'

import { MdSort } from 'react-icons/md'

// const commentsData = [
//   {
//     profileName: "Sabari Hiswaran ",
//     comment: " Amazing Content. Keep it up ",
//     reply: [
//       {
//         profileName: "Sabari Hiswaran ",
//         comment: " Amazing Content. Keep it up "
//       }
//     ]
//   },
//   {
//     profileName: "Sabari Hiswaran ",
//     comment: " Amazing Content. Keep it up ",
//     reply: [
//       {
//         profileName: "Sabari Hiswaran ",
//         comment: " Amazing Content. Keep it up ",
//         reply: [
//           {
//             profileName: "Sabari Hiswaran ",
//             comment: " Amazing Content. Keep it up "
//           }
//         ]
//       }
//     ]
//   },
//   {
//     profileName: "Sabari Hiswaran ",
//     comment: " Amazing Content. Keep it up ",
//     reply: ""
//   },
//   {
//     profileName: "Sabari Hiswaran ",
//     comment: " Amazing Content. Keep it up ",
//     reply: ""
//   },
//   {
//     profileName: "Sabari Hiswaran ",
//     comment: " Amazing Content. Keep it up ",
//     reply: ""
//   }
// ]

export const commentsData = [
  {
    id: "001",
    name: "Lavanya Kannan",
    text: "I truly love your channel. Keep doing the best work. ",
    replies: [],
  },
  {
    id: "002",
    name: "Diksha Sama",
    text: "Officially the first viewer of any video on this channel.",
    replies: [
      {
        id: "003",
        name: "Apurva Deo",
        text: "You’re working so hard, may all your wishes come true. ",
        replies: [],
      },
    ],
  },
  {
    id: "004",
    name: "Nisha Pall",
    text: "When watching your videos, I accidentally hit ‘like’ and never knew when. ",
    replies: [
      {
        id: "005",
        name: "Sneha Garg",
        text: "Glad that finally, I got to watch the original video.",
        replies: [
          {
            id: "006",
            name: "Amar Oza",
            text: "I simply love your video style, truly refreshing and creative.  ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "006",
    name: "Ajit Nagy",
    text: "So happy that your videos are now coming regularly, I was missing them. ",
    replies: [],
  },
  {
    id: "007",
    name: "Arushi Chakrabarti",
    text: "I pray whoever reads this right now, may you get everything you wish. ",
    replies: [
      {
        id: "008",
        name: "Harsh Merchant",
        text: "I was feeling lost in life, glad that your comment came at right time now, i know what i wish for ♥️.",
        replies: [],
      },
    ],
  },
];


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

