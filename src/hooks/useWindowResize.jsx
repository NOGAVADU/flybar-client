import {useEffect, useState} from "react";

export default function useWindowResize() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return width
}