import React from "react";
import Shimmer from "./Shimmer";

const SkeletonCard = () => {
    return (
        <div className="relative rounded mb-6 w-72 h-72 sm:w-60 mx-3 sm:my-4 ">
            <div className=" ">
                <div className="rounded-2xl bg-gray-400  p-[75px] "></div>
                <div className="px-2 bg-gray-50 pb-px">
                    <div className="text-l uppercase mt-4 my-2 py-3  bg-gray-400 rounded " ></div>
                    <div className="py-3 px-7  inline-block  mb-2 rounded bg-gray-500 " ></div>
                    <div className=" w-24 py-2 bg-gray-400 rounded" ></div>
                    <div className="flex gap-2 bg-gray-400 rounded h-5 w-36 my-2">
                        <h5 className="w-12 ml-1 bg-gray-400 rounded"></h5>
                        <h5 className="w-20 ml-1 bg-gray-400 rounded"></h5>
                    </div>
                    <div className="bg-gray-400 w-24 p-2 my-2 rounded" ></div>
                    <div className="bg-gray-400 w-32 p-2 mb-2 rounded" ></div>
                </div>
            </div>
            < Shimmer />
        </div>
    )
}
export default SkeletonCard;