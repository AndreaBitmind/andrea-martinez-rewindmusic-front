import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { ImodifySong } from "../../interfaces/users/Songs";
import SongModifyForm from "./SongModifyForm";

beforeEach(() => jest.restoreAllMocks());

const mockModifySong = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => () => ({
  modifySong: mockModifySong,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a form component", () => {
  describe("When instantiated", () => {
    test("And when the user submit the form", async () => {
      const song: ImodifySong = {
        id: "123456789",
        songName: "We are your friends",
        album: "We are your friends",
        year: "2001",
        band: "Justice, Simian",
        firstInstrument: "guitar",
        secondInstrument: "piano",
        image: "picture",
      };

      const songNameInput = "songName";
      const albumInput = "album";
      const yearInput = "year";
      const bandInput = "band";
      const firstInstrumentInput = "piano";
      const secondInstrumentInput = "piano";
      const imageInput = "image.jpg";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <SongModifyForm song={song} />
          </BrowserRouter>
        </Provider>
      );

      const songName = screen.getByPlaceholderText("Song name");
      const album = screen.getByPlaceholderText("Album");
      const year = screen.getByPlaceholderText("Year");
      const band = screen.getByPlaceholderText("Band");
      const firstInstrument = screen.getByTestId("select-option1");
      const secondInstrument = screen.getByTestId("select-option1");
      const image = screen.getByPlaceholderText("Album picture");

      await userEvent.type(songName, songNameInput);
      await userEvent.upload(image, new File(["test"], imageInput));
      await userEvent.type(album, albumInput);
      await userEvent.type(year, yearInput);
      await userEvent.type(band, bandInput);
      await userEvent.selectOptions(firstInstrument, firstInstrumentInput);
      await userEvent.selectOptions(secondInstrument, secondInstrumentInput);
      debugger;
      const buttonSubmit = screen.getByRole("button", { name: "Upload song" });

      debugger;
      await userEvent.click(buttonSubmit);
      debugger;
      expect(mockModifySong).toHaveBeenCalled();
    });
  });
});
