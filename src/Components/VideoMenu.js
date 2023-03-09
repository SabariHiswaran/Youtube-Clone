
const VideoMenu = () => {

    const menuitems = ["All", "Mixes", "Music", "Chess", "BodyBuilding", "Computer Programing", "Sales", " News", "Thoughts"]

    return (
        <div className="flex justify-between">
                {menuitems.map((item,index) => {
                    return (

                        <button key={index} className="bg-gray-200 pr-3 pl-3 border rounded-md"> {item} </button>

                    )
                })}
           

        </div>
    )
}

export default VideoMenu