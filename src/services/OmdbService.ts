import axios from 'axios';
import { IResponse } from '../models/IResponse';
import { IMovie } from '../models/IMovie';

const BASE_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&`;

export const get = async <T>(endpointData: string) => {
  return await axios.get<T>(`${BASE_URL}${endpointData}`);
};

export const getMovies = async (searchText: string): Promise<IMovie[]> => {
  const response = await get<IResponse>(`s=${searchText}`);
  return response.data.Search;
};
