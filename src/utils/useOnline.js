// This is a custom hook for checking whether online or offline.. It checks while 
import { useEffect, useState } from "react"

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(window.navigator.onLine)
    useEffect(() => {
        console.log('useOnline called')

        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline)

        return () => {  // for cleanup - removing all the events -- cleaning cache
            console.log('componentWillUnmount of useOnline')
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, []) // this will work only while first render
    return isOnline;
}

export default useOnline;