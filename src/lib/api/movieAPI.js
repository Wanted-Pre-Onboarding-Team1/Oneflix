import { HttpRequest } from 'lib/api/httpRequest';

const request = new HttpRequest();
export const getMoviesAPI = async (title, year, page) => {
  const response = await request.get(
    `/movies?_limit=20&_page=${page}&year_like=${year}&q=${title}`,
  );
  return response.data;
};
// &year=${year}
