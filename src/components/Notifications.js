import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../utils/cartSlice";

const Notifications = () => {

    // subscribing to store for notifications status
    const notification = useSelector(state => state.cart.notification);
    const dispatch = useDispatch();
    console.log(notification)

    // here useEffect hook is used for modifying the notification to null after 3 seconds
    // in useEffect we can apply the the componentWillUnmount tasks
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {  // Dispatch clearNotification action to clear the notification after 3 seconds
                dispatch(clearNotification());
            }, 1000);

            // Cleanup function to clear the timeout when the component unmounts or when notification changes
            return () => clearTimeout(timer);
        }
    }, [notification, dispatch]);

    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[23px] ">
            {notification && <div className={`${notification.type} animate-bounce  bg-green-600 text-sm py-1 px-4 text-white rounded`}>
                {notification.message}
                 &nbsp;<i className="fa-solid fa-check "></i>
            </div>}
        </div>
    )
}

export default Notifications;