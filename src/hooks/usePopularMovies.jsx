import { useQuery } from '@tanstack/react-query';
import api from '../utils/Api';

const fetchPopularMovies = async () => {
   return api.get('/movie/popular');
};
const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-popular'],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};

export default usePopularMoviesQuery;