import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Isong } from "../../interfaces/users/Songs";
import { store } from "../../store/store";
import Wrapper from "../../utils/Wrapper";
import SongDetailsPage from "./SongDetailsPage";

const mockSong: Isong = {
  id: "132165",
  songName: "We are your friends",
  album: "We are your friends",
  year: "2001",
  band: "Justice, Simian",
  firstInstrument: "guitar",
  secondInstrument: "piano",
  image: "http://picture.com",
  embeded: "song1",
  owner: "user",
  imageBackUp: "imageBackUp",
};
const mockNavigate = jest.fn().mockReturnValue(mockSong.id);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: mockSong.id }),
  useNavigate: () => mockNavigate,
}));

const mockUseApi = {
  getOneSongById: jest.fn().mockResolvedValue(mockSong),
};

jest.mock("../../hooks/useApi/useApi", () => () => mockUseApi);

describe("Given the SongDetails page", () => {
  describe("When it's instantiated", () => {
    test("Then should show a list inside", () => {
      render(<SongDetailsPage />, { wrapper: Wrapper });

      const expectedText = screen.getByText("SONG DETAILS");

      expect(expectedText).toBeInTheDocument();
    });

    test("And it should call the useState function", () => {
      let mockUseState;
      act(() => {
        mockUseState = jest.spyOn(React, "useState");
      });
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SongDetailsPage />
          </BrowserRouter>
        </Provider>
      );

      expect(mockUseState).toHaveBeenCalled();
    });
  });
});
