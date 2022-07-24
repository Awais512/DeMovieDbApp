import { configureStore } from "@reduxjs/toolkit";
import genreOrCategoryReducer from "../features/currentGenreOrCategory";
import authReducer from "../features/authSlice";
import { tmdbApi } from "../services/TMDB";

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: authReducer,
  },
});
