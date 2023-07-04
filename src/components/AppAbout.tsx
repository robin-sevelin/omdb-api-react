import { Link, useLoaderData } from 'react-router-dom';
import { IMovieLoader } from '../loaders/movieLoader';

export const AppAbout = () => {
  const { MovieExt: movieFromLoader } = useLoaderData() as IMovieLoader;

  return (
    <div className='about-movie'>
      <h3>{movieFromLoader.Title}</h3>
      <p>{movieFromLoader.Plot}</p>
      <p>{movieFromLoader.imdbRating}</p>
      <img src={movieFromLoader.Poster} alt={movieFromLoader.Title} />
      <Link to='/'>take me back</Link>
    </div>
  );
};
