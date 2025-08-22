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
const Language: string = "en-US";
const id: number = 343611;

const tmdbEndpoints = {
  movieUrl: `/discover/movie?include_adult=false&include_video=true&Language=${Language}&page=${pageNumber}&sort_by=popularity.desc`,
  tvUrl: `/discover/tv?include_adult=false&include_null_first_air_dates=false&Language=${Language}|&page=${pageNumber}&sort_by=popularity.desc`,
  nowPlayingMovieUrl: `/movie/now_playing?Language=${Language}&page=${pageNumber}`,
  upcomingMoviesUrl: `/movie/upcoming?Language=${Language}&page=${pageNumber}`,
  movieGenresUrl: `/genre/movie/list?language=en`,
  tvGenresUrl: `/genre/tv/list?language=en`,
  movieDetails: `https://api.themoviedb.org/3/movie/${id}`,
};
// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'; // trending banner movies 
// const url = 'https://api.themoviedb.org/3/trending/person/week?language=en-US' // Trending people 
/**
 * Fetch movie data from TMDB
 * @param url Full TMDB endpoint URL
 * @param options Fetch options with headers
 */

export async function fetchFromTMDB(path: string) {
  try {
    const res = await fetch(`${BaseUrl}${path}`, options);
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`Failed to fetch from TMDB: ${path}`, err);
    return null;
  }
}

export const fetchAllMovie = () => fetchFromTMDB(tmdbEndpoints.movieUrl);
export const fetchAllTvs = () => fetchFromTMDB(tmdbEndpoints.tvUrl);
export const fetchNowPlayingMovies = () =>
  fetchFromTMDB(tmdbEndpoints.nowPlayingMovieUrl);
export const fetchUpcomingMovies = () =>
  fetchFromTMDB(tmdbEndpoints.upcomingMoviesUrl);
export const fetchMovieGenres = () =>
  fetchFromTMDB(tmdbEndpoints.movieGenresUrl);
export const fetchTvGenres = () => fetchFromTMDB(tmdbEndpoints.tvGenresUrl);
export const fetchMovieDetails = () =>
  fetchFromTMDB(tmdbEndpoints.movieDetails);
