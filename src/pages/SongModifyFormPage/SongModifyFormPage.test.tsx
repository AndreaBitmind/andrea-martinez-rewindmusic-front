import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import SongModifyFormPage from "./SongModifyFormPage";

const mockUseParams = jest.fn();
const mockUseAppSelector = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockUseParams(),
}));

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockUseAppSelector(),
}));

const mockUseApi = {
  getOneSongById: jest.fn().mockResolvedValue({
    id: "123456789",
    songName: "We are your friends",
    album: "We are your friends",
    year: "2001",
    band: "Justice, Simian",
    firstInstrument: "guitar",
    secondInstrument: "piano",
    image: "http://picture.com",
  }),
};
jest.mock("../../hooks/useApi/useApi", () => () => mockUseApi);

describe("Given a SongFormModifyPage component", () => {
  describe("When not receives an id", () => {
    test("Then it should rendered the create component", () => {
      mockUseParams.mockReturnValue({ id: undefined });
      mockUseAppSelector.mockReturnValue([]);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <SongModifyFormPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedText = screen.getByText("MODIFY YOUR SONG");

      expect(expectedText).toBeInTheDocument();
    });
  });
});
