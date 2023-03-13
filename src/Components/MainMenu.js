
import { FaHome, FaBolt } from 'react-icons/fa'

import { MdSubscriptions } from 'react-icons/md'

import {Link} from 'react-router-dom'

const MainMenu = () => {
    return (
        <div>

            <ul className='flex flex-col justify-between h-24 '>
                <Link to="/">
                <li className='flex items-center p-1 hover:bg-gray-300 hover:rounded-md'>

                    <span className='flex justify-start w-12'> <FaHome /></span>
                    <span className='flex justify-start  w-40'> Home </span>

                </li>
                </Link>


                <li className='flex items-center p-1'>

                    <span className='flex justify-start w-12'> <FaBolt />  </span>
                    <span className='flex justify-start w-40'> Shorts </span>

                </li>


                <li className='flex items-center p-1'>

                    <span className='flex justify-start w-12'> <MdSubscriptions /></span>
                    <span className='flex justify-start w-40'> Subscriptions </span>

                </li>


            </ul>
        </div>
    )
}

export default MainMenu