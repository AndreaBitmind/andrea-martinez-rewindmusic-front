import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { songsReducer } from "./features/songs/slices/songsSlice";
import { userReducer } from "./features/users/slices/usersSlice";

export const store = configureStore({
  reducer: { users: userReducer, songs: songsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
