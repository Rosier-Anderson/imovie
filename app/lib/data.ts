const key = process.env.API_SECRET_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
};

const movieUrl: string =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc";
const tvUrl: string =
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
/**
 * Fetch movie data from TMDB
 * @param url Full TMDB endpoint URL
 * @param options Fetch options with headers
 */
export async function fetchAllMovie() {
  try {
    const res = await fetch(movieUrl, options);
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie data:", error);
    return null;
  }
}

export async function fetchAllTvs() {
  try {
    const res = await fetch(tvUrl, options);
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie data:", error);
    return null;
  }
}
