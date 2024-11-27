"use client";
import { Route, Routes } from 'react-router-dom'
import MovieList from '../Pages/MovieList'
import { MovieDetails } from '../Pages/MovieDetails';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MovieList title="Now Playing Movies" apiPath='movie/now_playing' />} />
      <Route path='/movie/popular' element={<MovieList title="Popular Movies Movies" apiPath='movie/popular' />} />
      <Route path='/movie/top_rated' element={<MovieList title="Top Rated Movies" apiPath='movie/top_rated' />} />
      <Route path='/movie/upcoming' element={<MovieList title="Upcoming Movies" apiPath='movie/upcoming' />} />
      <Route path='/movie/:id' element={<MovieDetails/>} />
    </Routes>
  )
}

export default AllRoutes