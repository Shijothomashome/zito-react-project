import React, { useEffect } from "react";
import useOnline from "../utils/useOnline";
import NoInternet from "./NoInternet";

const Contact = () => {
    const isOnline = useOnline()

    if (!isOnline) {
        return <NoInternet />
    }
  

    return (
        <div>
            <h1>Contact us</h1>
        </div>
    )

    
}

export default Contact;