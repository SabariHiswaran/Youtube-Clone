
import { FaHome, FaBolt } from 'react-icons/fa'

import { MdSubscriptions } from 'react-icons/md'

const MainMenu = () => {
    return (
        <div>
            {/*             
            <ul className='flex flex-col justify-between h-24'>
                <li className='flex items-center justify-evenly w-28'> <FaHome/> Home</li>
                <li className='flex items-center  justify-evenly w-28'> <FaBolt/> Shorts </li>
                <li className='flex items-center justify-evenly mr-1 '> <MdSubscriptions/> Subscriptions</li>
             
            </ul> */}

            <ul className='flex flex-col justify-between h-24'>

                <li className='flex items-center'>

                    <span className='flex justify-start w-12'> <FaHome /></span>
                    <span className='flex justify-start w-40'> Home </span>

                </li>


                <li className='flex items-center'>

                    <span className='flex justify-start w-12'> <FaBolt />  </span>
                    <span className='flex justify-start w-40'> Shorts </span>

                </li>


                <li className='flex items-center'>

                    <span className='flex justify-start w-12'> <MdSubscriptions /></span>
                    <span className='flex justify-start w-40'> Subscriptions </span>

                </li>


            </ul>
        </div>
    )
}

export default MainMenu