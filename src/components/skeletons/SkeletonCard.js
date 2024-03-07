import React from "react";
import Shimmer from "./Shimmer";

const SkeletonCard = () => {
    return (
        <div className="relative overflow-hidden  w-72 sm:w-64  my-4 sm:my-8  p-2">
            <div className="px-2 py-0.5 bg-gray-200">
                <div className="w-50 h-40 bg-gray-400 my-3 rounded" ></div>
                <div className="w-3/4 h-8 my-8 bg-gray-400  rounded" ></div>
                <div className="w-full h-3 bg-gray-400 my-3 rounded" ></div>
                <div className="w-2/5 h-3 bg-gray-400 my-3 rounded" ></div>
                <div className="w-1/5 h-4 my-5 mx-0 bg-gray-400  rounded" ></div>
                <div className="w-2/6 h-4 my-5 mx-0 bg-gray-400  rounded" ></div>
                <div className="w-2/5 h-4 my-5 mx-0 bg-gray-400  rounded " ></div>

            </div>
            < Shimmer />
        </div>
    )
}
export default SkeletonCard;