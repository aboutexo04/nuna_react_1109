import React from 'react';
import Banner from './components/banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import NowPlayingSlide from './components/NowPlayingSlide/NowPlayingSlide';
import UpcomingSlide from './components/UpcomingSlide/UpcomingSlide';
//1.배너 =>

//2.popular movies
//3.top rated movies
//4.upcoming movies

const Homepage = () => {
  return (
    <>
      <Banner />
      <PopularMovieSlide />
      <NowPlayingSlide />
      <UpcomingSlide />
    </>
  );
};

export default Homepage;
