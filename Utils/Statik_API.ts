import { KEY_FILM } from "./Static";
const BASE_URL = 'https://api.themoviedb.org/3';

export const MOVIE_API_ENDPOINTS = {
  popular: (page: number = 1) => `${BASE_URL}/movie/popular?language=ru-RU&page=${page}`,
  nowPlaying: (page: number = 1) => `${BASE_URL}/movie/now_playing?language=ru-RU&page=${page}`,
  topRated: (page: number = 1) => `${BASE_URL}/movie/top_rated?language=ru-RU&page=${page}`,
  upcoming: (page: number = 1) => `${BASE_URL}/movie/upcoming?language=ru-RU&page=${page}`,
  trendingToday: (page: number = 1) => `${BASE_URL}/trending/movie/day?language=ru-RU&page=${page}`,
  trendingThisWeek: (page: number = 1) => `${BASE_URL}/trending/movie/week?language=ru-RU&page=${page}`,
  search: (query: string, page: number = 1) =>
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=ru-RU}`,
  details: (id: number | string) =>
    `${BASE_URL}/movie/${id}?language=ru-RU&include_adult=false`,
  videos: (id: number | string) =>
    `${BASE_URL}/movie/${id}/videos?language=ru-RU`,
};


// Универсальный fetch-запрос с заголовками авторизации
export async function fetchFromApi<T = any>(url: string, cache = true, cacheDuration = 3600): Promise<T> {
  const headers: HeadersInit = {
    accept: 'application/json',
    Authorization: `Bearer ${KEY_FILM}`,
  };

  let cacheOption: RequestCache;
  let cacheControlHeader: string | undefined;

  if (cache) {
    // Если кэширование включено, добавляем кэширование на время, указанное в cacheDuration (в секундах)
    cacheOption = 'default';
    cacheControlHeader = `public, max-age=${cacheDuration}`;
  } else {
    // Если кэширование отключено, загружаем свежие данные
    cacheOption = 'no-store';
  }

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      ...headers,
      'Cache-Control': cacheControlHeader ?? '', // Добавляем заголовок кэширования
    },
    cache: cacheOption, 
  });

  if (!res.ok) {
    throw new Error(`Ошибка при загрузке данных: ${res.status}`);
  }

  return res.json();
}
