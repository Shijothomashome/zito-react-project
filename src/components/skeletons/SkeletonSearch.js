import React from "react"
import Shimmer from "./Shimmer";

const SkeletonSearch = () => {
    return (
    <div className="relative bg-gray-400 flex flex-col lg:flex-row lg:justify-between lg:items-center px-5 sm:px-20 py-16 md:py-24 lg:py-[4.4rem] gap-4">
        {/* Left section */}
        <div className="flex items-center rounded w-3/4 sm:w-[21.5%]">
            <div className="p-2 bg-gray-200 rounded-s w-full h-10 animate-pulse"></div>
            <button className="bg-gray-500  font-medium py-2 px-3 rounded-e w-24 h-10 animate-pulse"></button>
        </div>

        {/* Right section */}
        <div className="relative pb-10 w-full sm:w-[60%]">
            <div className="bg-gray-200 h-36 sm:h-9 w-full rounded-lg animate-pulse"></div>
            <div className="absolute right-16 bottom-0 sm:bottom-2 bg-gray-200 h-6 w-48 rounded-lg animate-pulse"></div>
        </div>
        <Shimmer />
    </div>
    )}


export default SkeletonSearch;