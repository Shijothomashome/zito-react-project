// common functions and logics
import { useState } from "react"

export function filterData(searchText, allRestaurants) {

    const filterData = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
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
