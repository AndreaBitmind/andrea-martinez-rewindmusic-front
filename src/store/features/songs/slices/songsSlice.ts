import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Isong, Songs } from "../../../../interfaces/users/Songs";

const songsInitialState: Songs = [];

const songsSlice = createSlice({
  name: "songs",
  initialState: songsInitialState,
  reducers: {
    loadAllSongs: (previousSongs, action: PayloadAction<Songs>) => [
      ...action.payload,
    ],
    deleteSong: (previousState, action: PayloadAction<string>) =>
      previousState.filter((song) => song.id !== action.payload),

    createSong: (previousState, action: PayloadAction<Isong>) => [
      ...previousState,
      action.payload,
    ],
  },
});

export const { reducer: songsReducer } = songsSlice;

export const {
  loadAllSongs: loadAllSongsActionCreator,
  deleteSong: deleteSongActionCreator,
  createSong: createNewSongActionCreator,
} = songsSlice.actions;

export default songsSlice.reducer;
