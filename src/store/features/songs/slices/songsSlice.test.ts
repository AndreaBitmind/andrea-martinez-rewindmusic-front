import { Songs } from "../../../../interfaces/users/Songs";
import songsSlice, { loadAllSongsActionCreator } from "./songsSlice";

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
});
