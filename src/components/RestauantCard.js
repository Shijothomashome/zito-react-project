import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";


const RestaurantCard = ({ id, cloudinaryImageId, name, cuisines, areaName, sla, costForTwo, avgRating, }) => {

  return (
    <Link className="shadow-2xl rounded w-72 sm:w-60 mx-2 my-4 sm:my-8 bg-gray-100 text-black p-2" to={`/restaurant/${id}`}>
      <div className='card '>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-semibold text-l uppercase my-4 ">{name}</h2>
        <h5 className="mb-2 text-sm ">{cuisines.join(", ")}</h5>
        <div className="flex gap-4 mb-3">
          <h5 className=" bg-green-600 inline-block px-2 py-px rounded text-white"><i className="fa-solid fa-star text-white"></i> {avgRating}</h5>
          <h5>{costForTwo}</h5>
        </div>
        <span>
          <h5>&nbsp;&nbsp;{sla?.lastMileTravelString}</h5>
          <h5><i className="fa-solid fa-location-dot mt-3 text-yellow-500"></i> {areaName}</h5>
        </span>
        </div>
    </Link>

  )
}

export default RestaurantCard;