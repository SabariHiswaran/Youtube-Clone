
import {FaHome , FaBolt} from 'react-icons/fa'

import {MdSubscriptions} from 'react-icons/md'

const MainMenu = () => {
    return (
        <div> 
            
            <ul className='flex flex-col justify-between h-24'>
                <li className='flex items-center justify-evenly w-20'> <FaHome/> Home</li>
                <li className='flex items-center  justify-evenly w-20'> <FaBolt/> Shorts </li>
                <li className='flex items-center justify-evenly w-28 '> <MdSubscriptions/> Subscriptions</li>
             
            </ul>

        </div>
    )
}

export default MainMenu