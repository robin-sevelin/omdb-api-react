import { Link } from 'react-router-dom';
import { IMovieProps } from '../models/IMovieProps';

export const AppMovie = (props: IMovieProps) => {
  const html = props.MovieProps.map((movie) => (
    <div key={movie.imdbID}>
      <div className='movie'>
        <Link to={'/about/' + movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} width='250' height='350' />
        </Link>
      </div>
    </div>
  ));
  return <div className='movies'>{html}</div>;
};
