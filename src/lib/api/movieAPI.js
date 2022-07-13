import { HttpRequest } from 'lib/api/httpRequest';

const request = new HttpRequest();
export const getMoviesAPI = async (title, year, page) => {
  const response = await request.get(
    `/movies?_limit=20&_page=${page}&year_like=${year}&title=${title}`,
  );
  return response.data;
};

export const getMoviesTitleAPI = async (title) => {
  const response = await request.get(`/movies?_limit=10&q=${title}`);
  return response.data;
};
