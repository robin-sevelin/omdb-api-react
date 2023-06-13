import { AppMovie } from './AppMovie';
import { IMovieProps } from '../models/IMovieProps';

export const AppMovies = (props: IMovieProps) => {
  return (
    <>
      <AppMovie MovieProps={props.MovieProps} />
    </>
  );
};
