import { useEffect, useState } from "react";


export default function useLastPath(data) {
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(data)
    }, [data]);

    return [path, setPath]
}