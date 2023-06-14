import { IMovie } from './IMovie';

export interface IMovieExt extends IMovie {
  Plot: string;
  imdbRating: string;
  Runtime: string;
  Rated: string;
  Genre: string;
  Director: string;
  Country: string;
}
