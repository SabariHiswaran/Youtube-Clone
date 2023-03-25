import React from 'react'

import profile from "../Images/profileicon.png"

const Comment = ({commentData}) => {

    const {name , text } = commentData
    return (
        <div className='flex'>
            <img src={profile} alt="profileimage.png" className='rounded-lg w-16 h-16' />

            <div className='flex flex-col justify-center'>
                <h1 className='font-semibold'> {name} <span className='font-normal text-xs'> 2 Hours Ago.</span> </h1>
                <p>  {text}</p>
            </div>
        </div>
    )
}

export default Comment