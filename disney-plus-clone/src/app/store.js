import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "../features/counter/counterSlice";
import movieReducer from "../features/counter/movie/movieSlice";
import userSlice from "../features/counter/user/userSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice,
  },
});
