"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Backup from '/public/images/backup.png';
import { ConvertMinutes, splitBudget } from '../Utils/utils';

export const MovieDetails = () => {
    const params = useParams();
    const [movies, setMovies] = useState<any>([]);
    const key = process.env.customKey;
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

    const images = movies.poster_path ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}` : Backup;

    useEffect(() => {
        async function fetchMovies() {
            fetch(url).then((resp) => resp.json()).then((jsonData) => setMovies(jsonData));
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        if (movies.original_title && typeof document != 'undefined') {
            document.title = `${movies.title}`;
        }
    }, [])
    return (
        <div className='container p-3'>

            <h3 className='text-center rounded p-1 w-50 shadow-sm'
                style={{ backgroundColor: '#D4BEE4', color: '#3B1E54' }}>
                {movies.original_title}
            </h3>

            <div className="card mb-3 mt-5 mx-auto" style={{ width: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={images as any} className="img-fluid rounded-start  h-100" alt="BackdropImages" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center p-1 rounded shadow-sm"
                                style={{ background: '#9B7EBD', color: '#EEEEEE' }}>
                                {movies.original_title}
                            </h5>
                            {movies.genres ? <p>
                                {movies.genres.map((genre: any) => (
                                    <span key={genre.id} className="badge m-2 p-2" style={{ background: '#EEEEEE', color: '#3B1E54', fontWeight: '400' }}>
                                        {genre.name}
                                    </span>
                                ))}
                            </p> : ""}
                            <div className="d-flex">
                                <p className="px-1"><i className="bi bi-star-fill text-warning px-1"></i>{movies.vote_average}</p>
                                <p><i className="bi bi-people-fill text-warning px-1"></i>{movies.vote_count}</p>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Budget</th>
                                        <th scope="col">Release Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{ConvertMinutes(movies.runtime)}</td>
                                        <td>{splitBudget(movies.budget)}</td>
                                        <td>{movies.release_date}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href={`https://www.imdb.com/title/${movies.imdb_id}`}
                                className='btn btn_style px-3 py-2'>IMBD
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
