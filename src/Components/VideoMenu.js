
const VideoMenu = () => {

    const menuitems = ["All", "Mixes", "Music", "Chess", "BodyBuilding", "Computer Programing", "Sales", " News", "Thoughts"]

    return (
        <div>
            <ul className="flex justify-around">
                {menuitems.map(item => {
                    return (

                        <li className="bg-gray-200 pr-3 pl-3 border rounded-md"> {item} </li>

                    )
                })}
            </ul>

        </div>
    )
}

export default VideoMenu