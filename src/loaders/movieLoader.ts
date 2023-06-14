import { ActionFunctionArgs, ParamParseKey, Params } from 'react-router-dom';
import { IMovie } from '../models/IMovie';
import axios from 'axios';

export interface IMovieLoader {
  movie: IMovie;
}

const BASE_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&`;

const pathNames = {
  movieDetail: '/about/:id',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof pathNames.movieDetail>>;
}

export const movieLoader = async ({ params }: Args) => {
  const response = await axios.get<IMovie>(`${BASE_URL}i=${params.id}`);

  const data: IMovieLoader = { movie: response.data };

  return data;
};
