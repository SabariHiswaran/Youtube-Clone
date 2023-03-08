
import React from 'react'

import { CiStreamOn } from 'react-icons/ci'

const SubscriptionMenu = () => {
  return (
    <div>

      <h6 className='mt-5'>Subscriptions</h6>

      <ul className='flex flex-col h-56'>

        <li className='flex items-center mt-5'>

          <span className='flex justify-start w-8'>
            <img
              src='https://yt3.googleusercontent.com/sPT3L04FMPWVIlO8Or_oToim9tWFnQ1SLSP9684zQgdxogfXukJIT4nh45rxMwFVp4e8JENNFbA=s900-c-k-c0x00ffffff-no-rj'
              alt="Behindwoods"
              className='rounded-full'
            />
          </span>
          <span className='flex ml-3 w-36 text-[14px]'> Behindwoods Air  </span>
          <span className='flex justify-center w-8 text-red-500'> <CiStreamOn />  </span>

        </li>

        <li className='flex items-center mt-5'>

          <span className='flex justify-start w-8'>
            <img
              src='https://yt3.googleusercontent.com/ytc/AL5GRJXO_ZejAs3ASZnyVD4x-cPxIVqeqaJ4TC9gMWMzxJQ=s900-c-k-c0x00ffffff-no-rj'
              alt="Polimer"
              className='rounded-full'
            />
          </span>
          <span className='flex ml-3 w-36 text-[14px]'> Polimer News  </span>
          <span className='flex justify-center w-8 text-red-500'> <CiStreamOn />  </span>

        </li>

        <li className='flex items-center mt-5'>

          <span className='flex justify-start w-8'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZdX-cAJ3nOebkeXz1_xFSSVXARucAA5-Iln6a5g&s'
              alt="ABC Learning"
              className='rounded-full'
            />
          </span>
          <span className='flex ml-3 w-36 text-[14px]'> ABC Learning  </span>
          <span className='flex justify-center w-8 text-red-500'> <CiStreamOn />  </span>

        </li>

        <li className='flex items-center mt-5'>

          <span className='flex justify-start w-8'>
            <img
              src='https://yt3.googleusercontent.com/ytc/AL5GRJX4GmARfBNt_I42xS5D7ugzyxKFIQfRPFAzt4aH=s900-c-k-c0x00ffffff-no-rj'
              alt="90s gamer"
              className='rounded-full'
            />
          </span>
          <span className='flex ml-3 w-36 text-[14px]'>90s Gamer </span>
          <span className='flex justify-center w-8 text-red-500'> <CiStreamOn />  </span>

        </li>


      </ul>
    </div>
  )
}

export default SubscriptionMenu