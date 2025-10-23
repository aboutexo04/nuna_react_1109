import React from 'react'
import usePopularMoviesQuery from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import './Banner.style.css';

const Banner = () => {
  
    const {data,isLoading,error} = usePopularMoviesQuery();
    console.log("ddd",data);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <div style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.results[0]?.backdrop_path})`,
           
        }}
        className='banner'>
           <div className='banner-text-area text-white'>
            <h1>{data?.results[0]?.title}</h1>
            <p>{data?.results[0]?.overview}</p>
           </div>
        </div>
    )
    
  
};

export default Banner;
