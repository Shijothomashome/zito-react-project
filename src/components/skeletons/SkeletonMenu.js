import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonMenu = () => {
    return (
        <div className="relative overflow-hidden container sm:w-5/6 md:w-4/6 lg:w-3/6 mx-auto shadow-2xl">
            <div className="rounded-md my-8 p-6 shadow-2xl">
                {/* About shop */}
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <SkeletonElement type="w-48 h-48 sm:mr-5 rounded" />
                    <div className="mt-4 md:mt-0">
                        <SkeletonElement type="w-40 h-6 mb-2" />
                        <SkeletonElement type="w-32 h-4 mb-2" />
                        <SkeletonElement type="w-24 h-4 mb-2" />
                        <SkeletonElement type="w-40 h-4 mb-4" />
                        <div className="flex items-center">
                            <SkeletonElement type="w-8 h-4 mr-1" />
                            <SkeletonElement type="w-24 h-4" />
                        </div>
                    </div>
                </div>
                <SkeletonElement type="w-full h-px my-7" />
                {/* Menu list */}
                <div className="my-8">
                    {Array(15).fill("").map((_, index) => (
                        <div key={index} className="mb-6 bg-gray-200 p-2 rounded">
                            <SkeletonElement type="w-64 h-6 mb-3" />
                            <SkeletonElement type="w-full h-6 mb-1" />
                            <SkeletonElement type="w-40 h-6" />
                        </div>
                    ))}
                </div>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonMenu;
