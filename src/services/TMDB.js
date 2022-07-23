import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// export const tmdbApi = createApi({
//   reducerPath: "tmdbApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://api.themoviedb.org/3",
//     endpoints: (builder) => ({
//       getMovies: builder.query({
//         query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
//       }),
//     }),
//   }),
// });

export const tmdbApi = createApi({
  reducerPath: "tmdbApi ",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        //Get Movies by category
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        //Get Movies by gentre
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        // ! get Popular Movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
