import React from "react";
import Shimmer from "./Shimmer";


const SkeletonFilter = () => {
    return (
        <div class="relative overflow-x-auto scrollbar-hidden mx-6  sm:mx-10 sm:pl-12 md:pl-4 mt-7 mb-4  ">
            <ul class="flex lg:justify-center gap-3 py-1 sm:pl-6 md:-ml-7 whitespace-nowrap text-gray-600 text-base text font-medium animate-pulse">
                <li class="hover:text-gray-950 cursor-pointer  px-3 rounded-full border border-gray-300">
                    <div class="skeleton-item w-32 h-8 rounded-full flex justify-center items-center animate-pulse"><div className="w-full h-5 rounded-xl bg-gray-300 py-1"></div></div>
                </li>
                <li class="hover:text-gray-950 cursor-pointer  px-3 rounded-full border border-gray-300">
                    <div class="skeleton-item w-32 h-8 rounded-full flex justify-center items-center animate-pulse"><div className="w-full h-5 rounded-xl bg-gray-300 py-1"></div></div>
                </li>
                <li class="hover:text-gray-950 cursor-pointer  px-3 rounded-full border border-gray-300">
                    <div class="skeleton-item w-32 h-8 rounded-full flex justify-center items-center animate-pulse"><div className="w-full h-5 rounded-xl bg-gray-300 py-1"></div></div>
                </li>
                <li class="hover:text-gray-950 cursor-pointer  px-3 rounded-full border border-gray-300">
                    <div class="skeleton-item w-32 h-8 rounded-full flex justify-center items-center animate-pulse"><div className="w-full h-5 rounded-xl bg-gray-300 py-1"></div></div>
                </li>
                <li class="hover:text-gray-950 cursor-pointer  px-3 rounded-full border border-gray-300">
                    <div class="skeleton-item w-32 h-8 rounded-full flex justify-center items-center animate-pulse"><div className="w-full h-5 rounded-xl bg-gray-300 py-1"></div></div>
                </li>
                <li class="hover:text-gray-950 cursor-pointer  px-3 rounded-full border border-gray-300">
                    <div class="skeleton-item w-32 h-8 rounded-full flex justify-center items-center animate-pulse"><div className="w-full h-5 rounded-xl bg-gray-300 py-1"></div></div>
                </li>
                <li class="hover:text-gray-950 cursor-pointer  px-3 rounded-full border border-gray-300">
                    <div class="skeleton-item w-32 h-8 rounded-full flex justify-center items-center animate-pulse"><div className="w-full h-5 rounded-xl bg-gray-300 py-1"></div></div>
                </li>
            </ul>
            <Shimmer />
        </div>)
}


export default SkeletonFilter;