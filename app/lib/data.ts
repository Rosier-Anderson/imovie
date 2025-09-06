const key = process.env.API_SECRET_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
};
const BaseUrl: string = "https://api.themoviedb.org/3";
const pageNumber: number = 1;
const language: string = "en-US";

const tmdbEndPoints = {
  movieUrl: `/discover/movie?include_adult=false&include_video=true&language=${language}&page=${pageNumber}&sort_by=popularity.desc`,
  nowPlayingMovieUrl: `/movie/now_playing?language=${language}&page=${pageNumber}`,
  upcomingMoviesUrl: `/movie/upcoming?language=${language}&page=${pageNumber}`,
  movieGenresUrl: `/genre/movie/list?Language=en`,
  movieDetails: `/movie/`,
  tvUrl: `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=${language}|&page=${pageNumber}&sort_by=popularity.desc`,
  tvGenresUrl: `/genre/tv/list?Language=en`,
  trendingMovieUrl: `/trending/movie/day?language=${language}`,
  trendingPeopleUrl: `/trending/person/week?language=${language}`,
};

/**
 * Fetch movie data from TMDB
 * @param options Fetch options with headers
 */

export async function fetchFromTMDB(path: string, id?: number) {
  try {
    const URL = id ? `${BaseUrl}${path}${id}` : `${BaseUrl}${path}`;
    const res = await fetch(URL, options);
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`Failed to fetch from TMDB: ${path}`, err);
    return null;
  }
}

export const fetchAllMovie = () => fetchFromTMDB(tmdbEndPoints.movieUrl);
export const fetchNowPlayingMovies = () =>
  fetchFromTMDB(tmdbEndPoints.nowPlayingMovieUrl);
export const fetchUpcomingMovies = () =>
  fetchFromTMDB(tmdbEndPoints.upcomingMoviesUrl);
export const fetchMovieGenres = () =>
  fetchFromTMDB(tmdbEndPoints.movieGenresUrl);
export const fetchMovieDetails = (id: number) =>
  fetchFromTMDB(tmdbEndPoints.movieDetails, id);
// TVs
export const fetchAllTvs = () => fetchFromTMDB(tmdbEndPoints.tvUrl);
export const fetchTvGenres = () => fetchFromTMDB(tmdbEndPoints.tvGenresUrl);
// Trending and Hot News
export const fetchTrendingPeople = () =>
  fetchFromTMDB(tmdbEndPoints.trendingPeopleUrl);
export const fetchTrendingMovie = () =>
  fetchFromTMDB(tmdbEndPoints.trendingMovieUrl);
