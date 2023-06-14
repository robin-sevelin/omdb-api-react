import axios from 'axios';
import { IMovie } from '../models/IMovie';
import { IResponse } from '../models/IResponse';

export interface IMoviesLoader {
  movies: IMovie[];
}

const BASE_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&`;

export const moviesLoader = async () => {
  const response = await axios.get<IResponse>(`${BASE_URL}s=star`);

  const data: IMoviesLoader = { movies: response.data.Search };

  return data;
};
