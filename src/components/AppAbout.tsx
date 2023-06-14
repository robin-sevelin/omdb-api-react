import { Link, useLoaderData } from 'react-router-dom';
import { IMovieLoader } from '../loaders/movieLoader';

export const AppAbout = () => {
  const { MovieExt: movieFromLoader } = useLoaderData() as IMovieLoader;
  console.log(movieFromLoader.Title);

  return (
    <>
      <h2>{movieFromLoader.Title}</h2>
      <p>{movieFromLoader.Plot}</p>
      <img src={movieFromLoader.Poster} alt={movieFromLoader.Title} />
      <Link to='/'>take me back</Link>
    </>
  );
};
