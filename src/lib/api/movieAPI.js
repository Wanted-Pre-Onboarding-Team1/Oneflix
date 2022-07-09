import { HttpRequest } from 'lib/api/httpRequest';

const request = new HttpRequest();
export const getMoviesAPI = async (title, page) => {
  const response = await request.get(
    `/movies?_limit=20&_page=${page}&q=${title}`,
  );
  return response.data;
};
