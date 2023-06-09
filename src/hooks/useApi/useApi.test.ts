import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
import {
  deleteSongActionCreator,
  loadAllSongsActionCreator,
} from "../../store/features/songs/slices/songsSlice";
import { logOutActionCreator } from "../../store/features/users/slices/usersSlice";
import Wrapper from "../../utils/Wrapper";
import useUser from "../useUser/useUser";
import useApi from "./useApi";

jest.mock("react-toastify");
const mockUseDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

describe("Given a useApi hook", () => {
  const data = {
    songs: [
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
        id: "135165",
        owner: "123456",
      },
    ],
  };

  describe("When invoked a getAllSongs function and receives a list of songs", () => {
    test("Then it should call the dispatch with loadAllSongsActionCreator with that list", async () => {
      const {
        result: {
          current: { getAllSongs },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      await act(async () => {
        await getAllSongs();
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          loadAllSongsActionCreator(data.songs)
        );
      });
    });

    test("Then it should send a loading modal", async () => {
      const {
        result: {
          current: { getAllSongs },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      await act(async () => {
        await getAllSongs();
      });

      await waitFor(() => {
        expect(toast.loading).toHaveBeenCalledWith("Please wait :)", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    });
  });

  describe("When invoke getAllSongs function and it not receives a mockSongList", () => {
    test("Then it should send an error message modal", async () => {
      axios.defaults.headers.get["IsTestError"] = true;

      const {
        result: {
          current: { getAllSongs },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      await getAllSongs();

      expect(toast.error).toHaveBeenCalledWith(
        "Oops, something went wrong :(",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );

      delete axios.defaults.headers.get["IsTestError"];
    });
  });

  describe("When logOut function is called", () => {
    test("Then it should dispatch the log out action creator", async () => {
      const {
        result: {
          current: { logOut },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      act(() => {
        logOut();
      });

      expect(mockUseDispatch).toHaveBeenCalledWith(logOutActionCreator());
    });
  });

  describe("When invoke deleteSong function with a valid song id", () => {
    const {
      result: {
        current: { deleteSong },
      },
    } = renderHook(useApi, { wrapper: Wrapper });

    const idSong: string = "232464fe42536dd232";

    test("Then it should call the dispatch with the delete action creator with the id", async () => {
      await act(async () => {
        await deleteSong(idSong);
      });

      expect(toast.success).toHaveBeenCalledWith(
        "Great! This song has been deleted!",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        }
      );

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          deleteSongActionCreator(idSong)
        );
      });
    });

    describe("When called with an invalid project id", () => {
      test("Then it should not dispatch the delete action", async () => {
        axios.defaults.headers.delete["IsTestError"] = true;
        await act(async () => {
          await deleteSong("wrongId");
        });

        expect(toast.error).toHaveBeenCalledWith(
          "Oops, something went wrong :(",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );

        await waitFor(() => {
          expect(mockUseDispatch).not.toHaveBeenCalledWith(
            deleteSongActionCreator(idSong)
          );
        });

        delete axios.defaults.headers.delete["IsTestError"];
      });
    });
  });

  describe("When it's invoked with getOneSongById with the correct id", () => {
    test("Then it should return a song with this id", async () => {
      const idSong = "232464fe42536dd232";
      const mockSong = {
        songName: "We are your friends",
        album: "We are your friends",
        year: "2001",
        band: "Justice, Simian",
        firstInstrument: "guitar",
        secondInstrument: "piano",
        image: "http://picture.com",
        embeded: "prueba2",
        id: idSong,
        owner: "135165",
      };

      const {
        result: {
          current: { getOneSongById },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      const song = await getOneSongById(idSong);

      await expect(song).toStrictEqual(mockSong);
    });

    test("And if can't return a song, it should call the error modal", async () => {
      const {
        result: {
          current: { getOneSongById },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      await getOneSongById("wrongId");

      expect(toast.error).toHaveBeenCalledWith(
        "Cannot show details from this song",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    });
  });

  describe("When invoke createSong function with a formData", () => {
    test("Then it should call the succes modal", async () => {
      const song = new FormData();
      const {
        result: {
          current: { createSong },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      const mockSong = {
        songName: "We are your friends",
        album: "We are your friends",
        year: "2001",
        band: "Justice, Simian",
        firstInstrument: "guitar",
        secondInstrument: "piano",
        image: "http://picture.com",
      };

      song.append("song", JSON.stringify(mockSong));
      song.append("image", new File([], "image.jpg"));

      await act(async () => {
        await createSong(song);
      });

      expect(toast.success).toHaveBeenCalledWith(
        "Your songs has been correctly uploaded!",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        }
      );
    });
  });

  describe("When invoke a create a song without a correct formData", () => {
    test("Then it should call the error modal", async () => {
      axios.defaults.headers.post["IsTestError"] = true;
      const song = new FormData();

      const {
        result: {
          current: { createSong },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      const mockSong = {
        songName: "",
        album: "",
        year: "",
        band: "",
        firstInstrument: "",
        secondInstrument: "",
        image: "",
      };

      song.append("song", JSON.stringify(mockSong));
      song.append("image", new File([], "image.jpg"));

      await act(async () => {
        await createSong(song);
      });

      expect(toast.error).toHaveBeenCalledWith("Cannot create the song :(", {
        position: toast.POSITION.TOP_CENTER,
      });

      delete axios.defaults.headers.post["IsTestError"];
    });
  });

  describe("When invoked a modifySong function with a formData", () => {
    test("Then it should call the succes modal", async () => {
      const song = new FormData();

      const {
        result: {
          current: { modifySong },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      const idSong: string = "232464fe42536dd232";

      const mockSong = {
        id: idSong,
        songName: "We are your friends",
        album: "We are your friends",
        year: "2001",
        band: "Justice, Simian",
        firstInstrument: "guitar",
        secondInstrument: "piano",
        image: "http://picture.com",
      };

      song.append("wish", JSON.stringify(mockSong));
      song.append("image", new File([], "picture.png"));

      await act(async () => {
        await modifySong(song, idSong);
      });

      expect(toast.success).toHaveBeenCalledWith(
        "Song modified successfully!",

        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        }
      );
    });
  });

  describe("When invoked a modifySong without a correctly id", () => {
    test("Then it should call the error modal", async () => {
      const wish = new FormData();
      const {
        result: {
          current: { modifySong },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      await modifySong(wish, "wrongId");

      expect(toast.error).toHaveBeenCalledWith("Cannot modify the song :(", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  });
});
