import React from "react";

const SkeletonElement = ({type }) => {
    const classes = `bg-gray-400 my-3 rounded ${type} `
    return (
        <div className={classes}>

        </div>
    )
}

export default SkeletonElement; 