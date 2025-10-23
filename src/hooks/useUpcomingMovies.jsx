import { useQuery } from '@tanstack/react-query';
import api from '../utils/Api';

const fetchUpcomingMovies = async () => {
   return api.get('/movie/upcoming');
};
const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-upcoming'],
    queryFn: fetchUpcomingMovies,
    select: (result) => result.data,
  });
};

export default useUpcomingMoviesQuery;