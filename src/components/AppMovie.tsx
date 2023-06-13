import { IMovieProps } from '../models/IMovieProps';

export const AppMovie = (props: IMovieProps) => {
  const html = props.MovieProps.map((movie) => (
    <div key={movie.imdbID}>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt='' />
    </div>
  ));
  return <>{html}</>;
};
