import { Link, useLoaderData } from 'react-router-dom';
import { IMovieLoader } from '../loaders/movieLoader';

export const AppAbout = () => {
  const { movie: movieFromLoader } = useLoaderData() as IMovieLoader;
  return (
    <>
      <h2>{movieFromLoader.Title}</h2>
      <Link to='/'>take me back</Link>
    </>
  );
};
