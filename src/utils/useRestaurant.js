// custom hook

import { useState, useEffect } from "react";

/** here in this hook we are implementing the logic  
 *  fetch the data from the API and return it to where this hook is been called
 */

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState (null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            const response = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${id}`);
            // const response = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.58130&lng=76.52630&restaurantId=${id}&isMenuUx4=true&submitAction=ENTER`);
            const json = await response.json();
            
            // Store cards data in a variable
            const cardsData = json?.data?.cards || [];
            
            // Find the card containing restaurant information
            const restaurantCard = cardsData.find(e => e?.card?.card?.info);

            const restaurantCardDetails = cardsData.find(e => e?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    
            if (restaurantCard && restaurantCardDetails) {
                const restaurantInfo = restaurantCard.card.card.info;
                setRestaurant(restaurantInfo);
                const restaurantInfoDetails = restaurantCardDetails?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                setRestaurantMenu(restaurantInfoDetails);
            } else {
                console.error("Restaurant information not found in the API response");
                // Handle case where restaurant information is not found
            }
        } catch (error) {
            console.error("Error fetching restaurant info:", error);
            // Handle error (e.g., show error message to the user)
        }
    }
    
    

    return [ restaurant,restaurantMenu ];
}

export default useRestaurant