import { useState, useEffect } from "react";

export default function useScript(src) {
    const [lib, setLib] = useState({});
    useEffect(() => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => {
            setLib(window.OmiseCard);
        };
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [src]);
    return lib;
}
