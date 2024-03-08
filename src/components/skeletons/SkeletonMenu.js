import React from "react";
import Shimmer from "./Shimmer";

const SkeletonMenu = () => {
    return (
        <div className="relative overflow-hidden container sm:w-5/6 md:w-3/4 mx-auto shadow-2xl">
            <div className="rounded-md my-8 p-6 shadow-2xl">
                {/* About shop */}
                <div className="flex flex-col p-8 md:flex-row items-center md:items-start bg-gray-100">
                    <div className="w-64 h-48 sm:mr-5 rounded bg-gray-500"></div>
                    <div className="mt-4 md:mt-0">
                        <div className="w-40 h-6 mb-2 bg-gray-400 my-3 rounded"></div>
                        <div className="w-32 h-4 mb-2 bg-gray-400 my-3 rounded"></div>
                        <div className="w-24 h-4 mb-2 bg-gray-400 my-3 rounded"></div>
                        <div className="w-40 h-4 mb-4 bg-gray-400 my-3 rounded"></div>
                        <div className="flex items-center">
                            <div className="w-8 h-4 mr-1 bg-gray-400 my-3 rounded"></div>
                            <div className="w-24 h-4 bg-gray-400 my-3 rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px my-7 bg-gray-400 rounded"></div>
                {/* Menu list */}
                <div className="my-8">
                    {Array(15).fill("").map((_, index) => (
                        <div key={index} className="mb-6 bg-gray-200 p-2 rounded">
                            <div className="w-64 h-6 mb-3 bg-gray-400 my-3 rounded"></div>
                            <div className="w-full h-6 mb-1 bg-gray-400 my-3 rounded"></div>
                            <div className="w-40 h-6 bg-gray-400 my-3 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonMenu;
