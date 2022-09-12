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
    modifySong: (previousState, action: PayloadAction<Isong>) => {
      return previousState.map((song) =>
        song.id === action.payload.id ? action.payload : song
      );
    },
  },
});

export const { reducer: songsReducer } = songsSlice;

export const {
  loadAllSongs: loadAllSongsActionCreator,
  deleteSong: deleteSongActionCreator,
  createSong: createNewSongActionCreator,
  modifySong: modifySongActionCreator,
} = songsSlice.actions;

export default songsSlice.reducer;
