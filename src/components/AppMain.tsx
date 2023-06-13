import { useState, useEffect } from 'react';
import { IMovie } from '../models/IMovie';
import { getMovies } from '../services/OmdbService';
import { AppForm } from './AppForm';
import { AppMovies } from './AppMovies';

export const AppMain = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const searchText = localStorage.getItem('searchText') || 'harry';
    getMovies(searchText).then((moviesFromApi) => {
      setMovies(moviesFromApi);
    });
  });

  const handleSubmit = async (searchText: string) => {
    const movieData = await getMovies(searchText);
    setMovies(movieData);
    localStorage.setItem('searchText', searchText);
  };
  return (
    <main>
      <AppForm onSubmit={handleSubmit} />
      <AppMovies MovieProps={movies} />
    </main>
  );
};
