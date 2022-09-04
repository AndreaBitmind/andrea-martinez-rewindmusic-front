import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
import { loadAllSongsActionCreator } from "../../store/features/songs/slices/songsSlice";
import Wrapper from "../../utils/Wrapper";
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

  describe("When invoke getAllWishes function and it not receives a mockWishList", () => {
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
});
