import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import NoInternet from "./NoInternet";
import useOnline from "../utils/useOnline";
import { IMG_CDN_URL } from "../../constants";
import { MENU_IMG_CDN_URL } from "../../constants";
import SkeletonMenu from "./skeletons/SkeletonMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import dummy_food_image from "../images/dummy_food_image.png"
import { extractName } from "../utils/helper";
import { useState } from "react";


const Section = ({ index, category, isVisible, setIsVisible }) => {
    const dispatch = useDispatch()
    const handleAddFoodItem = (item) => {
        dispatch(addItem(item))  // dispatches the addItem action
    }
    return(
    <div key={index} className="mb-8 w-9/12 mx-auto ">
        <div className="border-b border-gray-300 w-full h-px my-6"></div>

        {isVisible ? (<div className="rounded flex justify-between items-center cursor-pointer p-1 pl-3 bg-gray-100" onClick={() => setIsVisible(false)}>
            <h2 className="text-2xl font-bold mb-4 text-black">{category?.card?.card?.title}</h2>
            <i className="fa-solid fa-angle-up mr-2"></i>
        </div>) : (
            <div className="rounded flex justify-between items-center cursor-pointer p-1 pl-3 bg-gray-100" onClick={() => setIsVisible(true)}>
                <h2 className="text-2xl font-bold mb-4 text-black">{category?.card?.card?.title}</h2>
                <i className="fa-solid fa-angle-down mr-2"></i>
            </div>)}

        {isVisible && category?.card?.card?.itemCards?.map((item, itemIndex) => (
            <div key={itemIndex} className="overflow-hidden mb-6  shadow">
                <div className="p-4">
                    <div className="flex flex-col  md:flex-row justify-between items-center mb-3 gap-3">
                        <h3 className="text-lg text-black font-semibold  md:w-1/2 flex-1">{extractName(item?.card?.info?.name)}</h3>
                        {console.log(`${typeof item.card.info.price }`)}
                        <p className="font-semibold text-green-700 flex-1">&#8377; {((item?.card?.info?.price / 200) || (item?.card?.info?.defaultPrice/200).toFixed(2))}</p>
                        <div className="relative  mx-auto flex-1">
                            {item?.card?.info?.imageId ? (
                                <img src={MENU_IMG_CDN_URL + item?.card?.info?.imageId} alt='food image' className=" w-52 h-36 object-cover rounded-lg" />
                            ) : (
                                <img src={dummy_food_image} alt='food image' className="w-52 h-36  object-cover rounded-lg" />
                            )
                            }
                            <button className="absolute -bottom-4 left-1/4 text-sm text-white font-semibold bg-orange-500 py-2 px-4 rounded-md hover:bg-orange-600" onClick={() => handleAddFoodItem(item?.card?.info)}>Add to Cart</button>
                        </div>
                    </div>

                    <div className="flex items-center">
                        
                        {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
                            <div className="flex items-center font-semibold mx-auto mt-4 md:mx-0 md:-mt-10">
                                <p className="text-base text-black mr-2">
                                    <i className="fa-solid fa-star fa-flip p-1 bg-green-500 rounded-xl" style={{ color: "#fff" }}></i>&nbsp;
                                    {item?.card?.info?.ratings?.aggregatedRating?.rating} <>&#8226;</>
                                </p>
                                <p className="text-base text-black">{item?.card?.info?.ratings?.aggregatedRating?.ratingCount}</p>
                            </div>
                        ) : (
                            <div className="flex items-center font-semibold mx-auto mt-4 sm:mx-0 sm:mt-0">
                                <p className="text-base text-black mr-2">
                                    <i className="fa-solid fa-star fa-flip p-1 bg-green-500 rounded-xl" style={{ color: "#fff" }}></i>
                                    3.9 <>&#8226;</>
                                </p>
                                <p className="text-base text-black">176 ratings</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        ))

        }
    </div>)
}

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, restaurantMenu] = useRestaurant(id) // fetching data from API and storing it into state variable restaurant is written inside this custom hook

    const [visibleSection, setVisibleSection] = useState()

   

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
        <div className="container sm:w-5/6 md:w-5/6 mx-auto ">
            <div className=" rounded-md my-8 p-6 ">
                {/* About shop */}
                <div className="bg-gray-800 p-10 text-white flex flex-col md:flex-row items-center md:items-start ">
                    <img className="rounded-md w-48 h-48 md:w-64 md:h-auto md:mr-8" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
                    <div className="mt-4 md:mt-0">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{name}</h1>
                        <h3 className="text-sm md:text-base mb-2">{areaName}</h3>
                        <h3 className="text-sm md:text-base text-green-400 mb-2">{costForTwoMessage}</h3>
                        <h3 className="text-sm md:text-base mb-4">{cuisines?.join(", ")}</h3>
                        <div className="flex items-center">
                            <span className="text-sm md:text-base text-yellow-500 font-semibold mr-1">{avgRating}</span>
                            <span className="text-xs md:text-sm text-gray-500">(Based on 500+ ratings)</span>
                        </div>
                    </div>
                </div>
                {/* Menu list */}
                <div className="mt-8 md:mx-32">
                    {menuCategories
                        .filter(category => category?.card?.card?.itemCards?.length > 0)
                        .map((category, index) => (

                            <Section key={index} index={index} category={category} isVisible={visibleSection === category?.card?.card?.title} setIsVisible={(Bool) => Bool ? setVisibleSection(category?.card?.card?.title) : setVisibleSection("")} />

                        ))}
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;

