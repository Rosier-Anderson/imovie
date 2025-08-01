const key = process.env.API_SECRET_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
};

const url: string =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc";

/**
 * Fetch movie data from TMDB
 * @param url Full TMDB endpoint URL
 * @param options Fetch options with headers
 */
export async function fetchAllMovie() {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie data:", error);
    return null;
  }
}
