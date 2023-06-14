import { AppForm } from './AppForm';
import { AppMovies } from './AppMovies';
import { useLoaderData } from 'react-router-dom';
import { IMoviesLoader } from '../loaders/moviesLoader';
import { useEffect, useState } from 'react';
import { IMovie } from '../models/IMovie';
import { getMovies } from '../services/OmdbService';

export const AppMain = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { movies: moviesFromLoader } = useLoaderData() as IMoviesLoader;

  useEffect(() => {
    if (moviesFromLoader) {
      setMovies(moviesFromLoader);
    }
  }, [moviesFromLoader]);

  const handleSubmit = async (searchText: string) => {
    const movieData = await getMovies(searchText);
    setMovies(movieData);
  };
  return (
    <main>
      <AppForm onSubmit={handleSubmit} />
      <AppMovies MovieProps={movies} />
    </main>
  );
};
