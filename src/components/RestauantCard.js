import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";


const RestaurantCard = ({ id, cloudinaryImageId, name, cuisines, areaName, sla, costForTwo, avgRating, }) => {

  return (
    <Link className=" relative  rounded mb-6 w-72 sm:w-60 mx-3 sm:my-4  text-black" to={`/restaurant/${id}`}>
      <div className='card '>
        <img className="rounded-2xl" src={IMG_CDN_URL + cloudinaryImageId} />
        <div className="px-2">
          <h2 className="font-semibold text-l uppercase mt-4 my-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{name}</h2>
          <h5 className=" bg-green-600 inline-block px-2 py-px mb-2 rounded text-white"><i className="fa-solid fa-star text-white text-sm"></i> {avgRating}</h5>
          <h5 className="font-medium">{costForTwo}</h5>
          <div className="flex gap-2">
          <h5>&nbsp;&nbsp;{sla?.lastMileTravelString || '_._ km'}</h5> <>&#8226;</>
          <h5>{sla?.slaString}</h5>
          </div>
          <h5><i className="fa-solid fa-location-dot  text-yellow-500"></i> {areaName}</h5>
          <h5 className="sans-serif font-thin opacity-75 text-sm mb-1">{cuisines.length > 2 ? cuisines.slice(0, 2).join(", ") : cuisines.join(", ")}</h5>
        </div>
      </div>
    </Link>

  )
}

export default RestaurantCard;