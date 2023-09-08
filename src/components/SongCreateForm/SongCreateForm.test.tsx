import React from "react";
import UserEvent from "@testing-library/user-event";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import SongCreateForm from "./SongCreateForm";
import Wrapper from "../../utils/Wrapper";

beforeEach(() => jest.restoreAllMocks());

const mockUseApi = {
  createSong: jest.fn(),
};
jest.mock("../../hooks/useApi/useApi", () => () => mockUseApi);

describe("Given a form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, 6 inputs and a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SongCreateForm />
          </BrowserRouter>
        </Provider>
      );

      const elements = [
        screen.getByText("UPLOAD YOUR SONG"),
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
      render(<SongCreateForm />, { wrapper: Wrapper });

      const textInput = screen.getAllByRole("textbox");
      await UserEvent.type(textInput[0], text);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("And when the user upload a file it should call the usestate", async () => {
      const useState = jest.spyOn(React, "useState");
      const idText = "Album image";
      const file = new File(["file"], "");
      render(<SongCreateForm />, { wrapper: Wrapper });

      const fileInput = screen.getByPlaceholderText(idText);
      await UserEvent.upload(fileInput, file);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("And when the user click the button, it should submit the form", async () => {
      const useState = jest.spyOn(React, "useState");
      render(<SongCreateForm />, { wrapper: Wrapper });

      const buttonSubmit = screen.getByRole("button");
      fireEvent.submit(buttonSubmit);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });
  });
});
