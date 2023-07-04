import { ActionFunctionArgs, ParamParseKey, Params } from 'react-router-dom';
import axios from 'axios';
import { IMovieExt } from '../models/IMovieEtx';
import { BASE_URL } from '../services/OmdbService';

export interface IMovieLoader {
  MovieExt: IMovieExt;
}

const pathNames = {
  movieDetail: '/about/:id',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof pathNames.movieDetail>>;
}

export const movieLoader = async ({ params }: Args) => {
  const response = await axios.get<IMovieExt>(`${BASE_URL}i=${params.id}`);

  const data: IMovieLoader = { MovieExt: response.data };

  return data;
};
