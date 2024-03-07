import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import NoInternet from "./NoInternet";
import useOnline from "../utils/useOnline";
import { IMG_CDN_URL } from "../../constants";
import SkeletonMenu from "./skeletons/SkeletonMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, restaurantMenu] = useRestaurant(id) // fetching data from API and storing it into state variable restaurant is written inside this custom hook

    const dispatch = useDispatch()
    const handleAddFoodItem = (item) => {
        dispatch(addItem(item))  // dispatches the addItem action
    }
   
    const isOnline = useOnline()
    if (!isOnline) {
        return <NoInternet />
    }

    if (!restaurant) {
        return <SkeletonMenu />
    }

    const { name, areaName, costForTwoMessage, cuisines, avgRating, cloudinaryImageId } = restaurant;
    const menuCategories = restaurantMenu;

    


    return (
        <div className="container sm:w-5/6 md:w-4/6 lg:w-3/6 mx-auto shadow-2xl">
            <div className="rounded-md my-8 p-6  shadow-2xl ">
                {/* About shop */}
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img className="rounded-md w-48 h-48 md:w-64 md:h-auto md:mr-8" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
                    <div className="mt-4 md:mt-0">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{name}</h1>
                        <h3 className="text-sm md:text-base text-gray-600 mb-2">{areaName}</h3>
                        <h3 className="text-sm md:text-base text-gray-600 mb-2">{costForTwoMessage}</h3>
                        <h3 className="text-sm md:text-base text-gray-600 mb-4">{cuisines?.join(", ")}</h3>
                        <div className="flex items-center">
                            <span className="text-sm md:text-base text-yellow-500 font-semibold mr-1">{avgRating}</span>
                            <span className="text-xs md:text-sm text-gray-500">(Based on 500+ ratings)</span>
                        </div>
                    </div>
                </div>
                {/* Menu list */}
                <div className="mt-8">
                    {menuCategories
                        .filter(category => category?.card?.card?.itemCards?.length > 0)
                        .map((category, index) => (
                            <div key={index} className="mb-6">
                                <div className="border-b border-gray-300 w-full h-px my-12"></div>
                                <h2 className="text-lg md:text-xl font-semibold mb-3">{category?.card?.card?.title}</h2>
                                {category?.card?.card?.itemCards?.map((item, itemIndex) => (
                                    <div key={itemIndex} className="border rounded-md overflow-hidden shadow-md mb-4">
                                        <div className="p-4">
                                            <h3 className="text-base  text-orange-400 md:text-lg font-semibold mb-1">{item?.card?.info?.name}</h3>
                                            <p className="text-sm md:text-base text-black mb-1">{item?.card?.info?.description}</p>
                                            <div className="flex items-center">
                                                {(item?.card?.info?.variantsV2?.variantGroups?.[0]?.variations?.[0]?.price) && (
                                                    <p className="text-sm md:text-base text-orange-700 mr-4">Price: {item?.card?.info?.variantsV2?.variantGroups?.[0]?.variations?.[0]?.price}</p>
                                                )}
                                                {(item?.card?.info?.ratings?.aggregatedRating?.rating) && <p className="text-sm md:text-base text-orange-700">Rating: {item?.card?.info?.ratings?.aggregatedRating?.rating}</p>}
                                            </div>
                                        </div>
                                        <div className="bg-yellow-50 p-3 flex justify-between">
                                            <button className="text-sm md:text-base text-white bg-orange-500 py-2 px-3 rounded hover:bg-orange-600" onClick={() => handleAddFoodItem(item?.card?.info)}>Add to Cart</button>
                                            <button className="text-sm md:text-base text-green-800 underline">View Details</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;

