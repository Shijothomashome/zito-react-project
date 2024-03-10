import { useState, useEffect } from "react";
import { restaurantList } from "../../constants";
import RestaurantCard from "./RestauantCard";
import SkeletonCard from "./skeletons/SkeletonCard";
import { filterByDistance, filterByPriceBetween_300_and_600, filterByPriceLessThan_300, filterByRatings, filterByVeg, filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import NoInternet from "./NoInternet";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, [])

  async function getRestaurants() {
    setTimeout(async () => {

      // const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=9.9816358&lng=76.2998842");
      const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      setAllRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }, 0)
  }

  console.log(allRestaurants)

  const isOnline = useOnline()
  if (!isOnline) {
    return <NoInternet />
  }

  return (
    <>
      <div className=" bg-black flex flex-wrap justify-between items-center px-5 sm:px-20 py-16 gap-4">
        {/*Left section*/}
        <div className="   flex  items-center  rounded ">
          <input
            type="text"
            className="p-2 outline-none  rounded-s "
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" bg-green-800 hover:bg-green-900 text-white font-medium py-2 px-3  rounded-e"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

        {/* Right section */}
        <div className=" relative pb-10 ">
          <h1 className="text-orange-400 text-5xl madimi-one-regular">Discover Delightful Flavors Near You</h1>
          <p className="absolute right-16 sm:bottom-4 text-white font-semibold m-plus-rounded-1c-regular text-center text-sm"><i className="fa-solid fa-award text-green-600 text-2xl"></i>&nbsp; Zito Tradition Since 1990! <i className="fa-solid fa-utensils text-orange-600"></i></p>
        </div>
      </div>


      <div className="overflow-x-auto scrollbar-hidden mx-6 sm:mx-10  sm:pl-12 md:pl-4 mt-7 mb-4">
        <ul className="flex lg:justify-center gap-3 py-1 sm:pl-6 md:-ml-7  whitespace-nowrap text-gray-600 text-base text font-medium">
          <li className=" hover:text-gray-950 cursor-pointer p-1  px-5 rounded-full border border-gray-300"><Link onClick={() => {
            const data = filterData("", allRestaurants);
            setFilteredRestaurants(data);
          }}>All Restaurants</Link></li>
          <li className=" hover:text-gray-950 cursor-pointer p-1  px-5 rounded-full border border-gray-300"><Link onClick={() => {
            const data = filterByRatings(4, allRestaurants);
            setFilteredRestaurants(data);
          }}>Ratings 4.O+</Link></li>
          <li className=" hover:text-gray-950 cursor-pointer p-1  px-5 rounded-full border border-gray-300"><Link onClick={() => {
            const data = filterByRatings(4.5, allRestaurants);
            setFilteredRestaurants(data);
          }}>Ratings 4.5+</Link></li>
          <li className=" hover:text-gray-950 cursor-pointer p-1  px-5 rounded-full border border-gray-300"><Link onClick={() => {
            const data = filterByVeg(true, allRestaurants);
            setFilteredRestaurants(data);
          }}>Pure Veg</Link></li>
          <li className=" hover:text-gray-950 cursor-pointer p-1  px-5 rounded-full border border-gray-300"><Link onClick={() => {
            const data = filterByDistance(4, allRestaurants);
            setFilteredRestaurants(data);
          }}>Within 4km</Link></li>
          <li className=" hover:text-gray-950 cursor-pointer p-1  px-5 rounded-full border border-gray-300"><Link onClick={() => {
            const data = filterByPriceLessThan_300(300, allRestaurants);
            setFilteredRestaurants(data)
          }} >Less than Rs.300</Link></li>
          <li className=" hover:text-gray-950 cursor-pointer p-1  px-5 rounded-full border border-gray-300"><Link onClick={() => {
            const data = filterByPriceBetween_300_and_600(300, 600, allRestaurants);
            setFilteredRestaurants(data)
          }}>Rs.300-Rs.600</Link></li>
        </ul>
      </div>



      <div className=' flex flex-wrap justify-center mb-10'>
        {
          (allRestaurants?.length === 0) ? Array(15).fill("").map((e, i) => <SkeletonCard key={i} />) :
            (filteredRestaurants?.length === 0) ? <h1>Not found</h1> :
              filteredRestaurants?.map((restaurant) => (

                <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
              )
              )}
      </div>
    </>
  );
}

export default Body;