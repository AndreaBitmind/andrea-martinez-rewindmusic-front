import { Isong, Songs } from "../../../../interfaces/users/Songs";
import songsSlice, {
  createNewSongActionCreator,
  deleteSongActionCreator,
  loadAllSongsActionCreator,
  songsReducer,
} from "./songsSlice";

describe("Given a songs slice", () => {
  describe("When invoked with an initial state as previous songs and a loadAllSongs with a fake list of songs", () => {
    test("Then it should return a list with two songs", () => {
      const initialState: Songs = [];

      const fakeListSongs: Songs = [
        {
          songName: "We are your friends",
          album: "We are your friends",
          year: "2001",
          band: "Justice, Simian",
          firstInstrument: "guitar",
          secondInstrument: "piano",
          image: "http://picture.com",
          embeded: "prueba2",
          id: "135165",
          owner: "123456",
        },
        {
          songName: "Barbie girl",
          album: "vicios y virtudes",
          year: "2001",
          band: "SFDK",
          firstInstrument: "guitar",
          secondInstrument: "piano",
          image: "http://picture.com",
          embeded: "prueba2",
          id: "135166",
          owner: "123456",
        },
      ];

      const songs = songsSlice(
        initialState,
        loadAllSongsActionCreator(fakeListSongs)
      );

      expect(songs).toStrictEqual(fakeListSongs);
    });
  });

  describe("When invoked with a initial song with an id as a payload and a deleteSong function", () => {
    const fakeSong: Isong = {
      songName: "We are your friends",
      album: "We are your friends",
      year: "2001",
      band: "Justice, Simian",
      firstInstrument: "guitar",
      secondInstrument: "piano",
      image: "http://picture.com",
      embeded: "prueba2",
      id: "135165",
      owner: "123456",
    };
    const actionType = "songs/deleteSong";
    const expectedAction = {
      type: actionType,
      payload: fakeSong.id,
    };
    test("Then it should return an action with a type 'songs/deleteSong' and a id as payload", () => {
      const action = deleteSongActionCreator(expectedAction.payload);

      expect(action).toStrictEqual(expectedAction);
    });

    test("Then it should remove the song passed in the action from the state", () => {
      const initialState = [fakeSong] as Isong[];

      const expectedResult = [] as Isong[];

      const action = deleteSongActionCreator(fakeSong.id);

      const result = songsReducer(initialState, action);

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When invoked with a createNewSong action", () => {
    test("Then it should return an action with a type 'songs/createNewSong and a song as payload", () => {
      const initialState: Songs = [];

      const fakeSong: Isong = {
        songName: "We are your friends",
        album: "We are your friends",
        year: "2001",
        band: "Justice, Simian",
        firstInstrument: "guitar",
        secondInstrument: "piano",
        image: "http://picture.com",
        embeded: "prueba2",
        id: "135165",
        owner: "123456",
      };

      const expectedResult = [fakeSong] as Songs;

      const actionFake = createNewSongActionCreator(fakeSong);

      const result = songsReducer(initialState, actionFake);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
