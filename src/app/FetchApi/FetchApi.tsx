import { useEffect, useState } from 'react'

const Fetchapi = ( apiPath : any) => {
    const [data, setData] = useState<any>([]);
    const key = process.env.customKey;
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}`;

    useEffect(() => {
        async function fetchMovies() {
            fetch(url).then((resp) => resp.json()).then((jsonData) => setData(jsonData.results));
        };
        fetchMovies();
    }, [url])
    return { data };
}

export default Fetchapi