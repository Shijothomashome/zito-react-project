import React from "react";
import Shimmer from "./Shimmer";

const SkeletonMenu = () => {
    return (
        <div className="relative overflow-hidden -mx-6 shadow-2xl">
            <div className="rounded-md my-8 p-6 shadow-2xl">
                {/* About shop */}
                <div className="flex flex-col p-10 md:px-32 md:flex-row -mt-14 items-center md:items-start bg-gray-500">
                    <div className="w-48 sm:w-[16rem] h-48 sm:h-40 sm:mr-5 rounded bg-gray-300"></div>
                    <div className="mt-4 md:mt-0 sm:ml-3 self-start">
                        <div className="w-72 sm:w-[484px] h-6 mb-2 bg-gray-300 my-3 rounded"></div>
                        <div className="w-32 h-4 mb-2 bg-gray-300 my-3 rounded"></div>
                        <div className="w-24 h-4 mb-2 bg-gray-300 my-3 rounded"></div>
                        <div className="w-40 h-4 mb-4 bg-gray-300 my-3 rounded"></div>
                        <div className="flex items-center">
                            <div className="w-8 h-4 mr-1 bg-gray-400 my-3 rounded"></div>
                            <div className="w-24 h-4 bg-gray-400 my-3 rounded"></div>
                        </div>
                    </div>
                </div>
                {/* Menu list */}
                <div className="mt-8 md:mx-32 mx-10">
                    {Array(15).fill("").map((_, index) => (
                        <div key={index} className="flex justify-between items-center mb-2 bg-gray-300 p-[10px] rounded">
                            <div className="w-40 sm:w-72 bg-gray-400 h-4 rounded-lg"></div>
                            <i className="fa-solid fa-angle-down mr-2 text-gray-500"></i>
                        </div>
                    ))}
                </div>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonMenu;
