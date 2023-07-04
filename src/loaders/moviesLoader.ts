import axios from 'axios';
import { IMovie } from '../models/IMovie';
import { IResponse } from '../models/IResponse';
import { BASE_URL } from '../services/OmdbService';

export interface IMoviesLoader {
  movies: IMovie[];
}

export const moviesLoader = async () => {
  const response = await axios.get<IResponse>(
    `${BASE_URL}s=` + localStorage.getItem('searchMovie')
  );

  const data: IMoviesLoader = { movies: response.data.Search };

  return data;
};
