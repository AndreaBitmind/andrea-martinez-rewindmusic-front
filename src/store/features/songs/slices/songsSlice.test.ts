import { Isong, Songs } from "../../../../interfaces/users/Songs";
import songsSlice, {
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
          instrument: ["guitar"],
          image: "http://picture.com",
          embeded: "prueba2",
          id: "135165",
        },
        {
          songName: "Barbie girl",
          album: "vicios y virtudes",
          year: "2001",
          band: "SFDK",
          instrument: ["piano"],
          image: "http://picture.com",
          embeded: "prueba2",
          id: "135166",
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
      instrument: ["guitar"],
      image: "http://picture.com",
      embeded: "prueba2",
      id: "135165",
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
});
