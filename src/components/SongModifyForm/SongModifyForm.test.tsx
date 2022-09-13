import React from "react";
import UserEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { ImodifySong } from "../../interfaces/users/Songs";
import SongModifyForm from "./SongModifyForm";

beforeEach(() => jest.restoreAllMocks());

const mockModifySong = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => () => ({ mockModifySong }));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a form component", () => {
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

  describe("When instantiated", () => {
    test("Then it should display a form with a title, two inputs and a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SongModifyForm song={song} />
          </BrowserRouter>
        </Provider>
      );

      const elements = [
        screen.getByText("MODIFY YOUR SONG"),
        screen.getByPlaceholderText("Song name"),
        screen.getByPlaceholderText("Album"),
        screen.getByPlaceholderText("Year"),
        screen.getByPlaceholderText("Band"),
        screen.getByTestId("select-option1"),
        screen.getByTestId("select-option2"),
        screen.getByRole("button"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
    test("And when the user write it should call the usestate", async () => {
      const useState = jest.spyOn(React, "useState");
      const text = "TextSong";
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SongModifyForm song={song} />
          </BrowserRouter>
        </Provider>
      );

      const textInput = screen.getAllByRole("textbox");
      await UserEvent.type(textInput[0], text);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("And when the user upload a file it should call the usestate", async () => {
      const useState = jest.spyOn(React, "useState");
      const idText = "Album picture";
      const file = new File(["file"], "");
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SongModifyForm song={song} />
          </BrowserRouter>
        </Provider>
      );

      const fileInput = screen.getByPlaceholderText(idText);
      await UserEvent.upload(fileInput, file);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });
  });
});
