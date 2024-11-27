import React from 'react'
import Backup from '/public/images/backup.png';
import { NavLink } from 'react-router-dom';
import Image from 'next/image';

const card = (movie: any) => {
    const {id, title, poster_path, overview , vote_average, vote_count} = movie.movie;
    const images = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;
    return (
        <>
            <div className='container'>
                <div className="card my-1 m-auto" style={{ width: '18rem'}}>
                    <Image src={images as any} className="img-fluid h-25" alt="movieImage" />
                    <div className="card-body">
                        <h5 className="card-title title">{title}</h5>
                        <p className="card-text text">{overview}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        <div className='d-flex justify-content-between align-items-center h-50'>
                            <NavLink to={`/movie/${id}`}  className='nav-link w-50 border_style'>
                                Read More
                            </NavLink>
                            <p className='mb-0 shadow-sm rounded p-1'>{vote_average} | {vote_count}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default card