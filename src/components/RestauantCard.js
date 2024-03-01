import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";


 const RestaurantCard = ({ id, cloudinaryImageId, name, cuisines, areaName, sla, costForTwo, avgRating, }) => {
  
    return (
      <Link className="border border-green-900 rounded w-72 sm:w-60 mx-2 my-4 sm:my-8 bg-gray-100 text-black p-2" to={`/restaurant/${id}`}>
      <div className='card '>
        <img  src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-semibold text-l uppercase my-4 ">{name}</h2>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
        <span>
          <h5><i className="fa-solid fa-star"></i>{avgRating}</h5>
          <h5>{sla?.lastMileTravelString}</h5>
          <h5>{costForTwo}</h5>
        </span>
      </div>
      </Link>
      
    )
  }

  export default RestaurantCard;