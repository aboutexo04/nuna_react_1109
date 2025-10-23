import { useQuery } from '@tanstack/react-query';
import api from '../utils/Api';

const fetchNowPlayingMovies = async () => {
   return api.get('/movie/now_playing');
};
const useNowPlayingMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-now-playing'],
    queryFn: fetchNowPlayingMovies,
    select: (result) => result.data,
  });
};

export default useNowPlayingMoviesQuery;