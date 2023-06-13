import axios from 'axios';
import { useState } from 'react';
import { IResponse } from '../models/IResponse';
import { IMovie } from '../models/IMovie';
import { AppMovie } from './AppMovie';
import { AppForm } from './AppForm';

export const AppMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const BASE_URL = `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }&s=`;

  const getMovies = async (text: string) => {
    const response = await axios.get<IResponse>(BASE_URL + text);

    setMovies(response.data.Search);
  };

  return (
    <>
      <AppForm onSubmit={getMovies} />
      <AppMovie MovieProps={movies} />
    </>
  );
};
