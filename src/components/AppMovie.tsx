import { Link } from 'react-router-dom';
import { IMovieProps } from '../models/IMovieProps';

export const AppMovie = (props: IMovieProps) => {
  const html = props.MovieProps.map((movie) => (
    <div key={movie.imdbID}>
      <div className='movie'>
        <img
          src={movie.Poster}
          alt={movie.Title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/src/assets/404.avif';
            currentTarget.loading = 'lazy';
          }}
        />
        <button>
          <Link to={'/about/' + movie.imdbID}>Read more</Link>
        </button>
      </div>
    </div>
  ));
  return <div className='movies'>{html}</div>;
};
