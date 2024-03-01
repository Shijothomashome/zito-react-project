import { useState, useEffect } from "react";
import { restaurantList } from "../../constants";
import RestaurantCard from "./RestauantCard";
import SkeletonCard from "./skeletons/SkeletonCard"
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import NoInternet from "./NoInternet";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, [])

  async function getRestaurants() {
    setTimeout(async () => {

      const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=9.9816358&lng=76.2998842");
      const json = await data.json();
      setAllRestaurants(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }, 0)
  }

  const isOnline = useOnline()
  if (!isOnline) {
    return <NoInternet />
  }

  return (
    <div className="container m-auto">
      {/* Search box */}
      <div className="my-5 ml-12 sm:ml-3  w-72  flex  items-center border border-green-900 rounded">
        <input
          type="text"
          className="p-2 outline-none border border-gray-200 rounded "
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="border border-green-800 bg-green-800 hover:bg-green-900 text-white font-medium py-2 px-3 w-[90px]"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>



      <div className=' restaurant-list flex flex-wrap justify-center '>
        {
          (allRestaurants?.length === 0) ? Array(15).fill("").map((e, i) => <SkeletonCard key={i} />) :
            (filteredRestaurants?.length === 0) ? <h1>Not found</h1> :
              filteredRestaurants?.map((restaurant) => (

                <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
              )
              )}
      </div>
    </div>
  );
}

export default Body;