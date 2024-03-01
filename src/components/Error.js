import React from "react";
import { useRouteError } from "react-router-dom";
import useOnline from "../utils/useOnline";
import NoInternet from "./NoInternet";

const Error = () => {

    const err = useRouteError(); // hook 
    console.log(err);
    const isOnline = useOnline()
    if(!isOnline){
      return <NoInternet />
    }
    return (
        <div>
            <h1>{err.error.message}</h1>
            <h2>{err.status+ " " +err.statusText }</h2>
        </div>
    )
}

export default Error