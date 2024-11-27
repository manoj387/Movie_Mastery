"use client";
import React, { useEffect } from 'react'
import Card from '../Component/card';
import fetchapi from '../hooks/fetchapi';

export const MovieList = ({ title, apiPath }: any) => {
    const { data: movies } = fetchapi(apiPath);
    useEffect(() => {
        if (movies.title && typeof document !== undefined) {
            document.title = title;
        }

    }, [])

    return (
        <>
            <div className='container p-3'>
                <h3 className='text-center rounded p-1 w-50 shadow-sm'
                    style={{ backgroundColor: '#D4BEE4', color: '#3B1E54' }}>
                    {title}
                </h3>

                <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 '>
                    {movies.map((movie: any) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>

    )
}

export default MovieList