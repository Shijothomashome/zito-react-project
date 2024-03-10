// common functions and logics
import { useState } from "react"

// filter by search
export function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  )
  return filterData;
}

// filtre by ratings
export const filterByRatings = (ratingValue, allRestaurants) => {
  const filterData = allRestaurants.filter(restaurant => {
    return restaurant.info.avgRating >= ratingValue
  })
  return filterData;
}

// filter by vegiterian
export const filterByVeg = (veg, allRestaurants) => {
  const filterData = allRestaurants.filter(restaurant => {
    if (restaurant.info && restaurant.info.veg !== undefined) {
      return restaurant.info.veg === veg
    }
  })
  return filterData;
}

// filter by distance
export const filterByDistance = (distance, allRestaurants) => {
  const filterData = allRestaurants.filter(restaurant => {
    return restaurant?.info?.sla?.lastMileTravel <= distance
  });
  return filterData;
}

// filter by price less than 300
export const filterByPriceLessThan_300 = (price, allRestaurants) => {
  const filterData = allRestaurants.filter(restaurant => {
    // Extract numerical value from the "costForTwo" string
    const costForTwo = parseInt(restaurant?.info?.costForTwo.replace(/[^\d]/g, '')); // Remove non-digit characters (like '₹') and convert to integer
    return costForTwo < price;
  });
  return filterData;
}

// filter by price between 300 and 600
export const filterByPriceBetween_300_and_600 = (minPrice, maxPrice, allRestaurants) => {
  const filterData = allRestaurants.filter(restaurant => {
    const costForTwo = parseInt(restaurant?.info?.costForTwo.replace(/[^\d]/g, '')); // Extract numerical value and convert to integer
    
    // Check if costForTwo is within the specified range
    return costForTwo >= minPrice && costForTwo <= maxPrice;
  });
  
  return filterData;
}


export const authentication = () => {   // normal function which updates state variable isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logout = () => {
    setIsLoggedIn(false);
  }

  const login = () => {
    setIsLoggedIn(true);

  }

  return [isLoggedIn, login, logout]
}

export const extractName = (str) => {
  const match = str.match(/^[^\[\(]+/)
  return match ? match[0].trim() : str.trim()
}
