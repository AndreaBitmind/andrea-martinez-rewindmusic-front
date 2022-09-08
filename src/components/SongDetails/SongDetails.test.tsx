import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SongDetailsPage from "../../pages/SongDetailsPage/SongDetailsPage";
import { store } from "../../store/store";
const mockSong = {
  songName: "a theory of love",
  album: "cellomano",
  year: "2008",
  band: "kumea sound",
  image: "image",
  instrument: ["piano", "trompeta"],
};

describe("Given a SongDetails component", () => {
  describe("When instantiated", () => {
    test("Then it should display a title, an image and a list of details", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SongDetailsPage />
          </BrowserRouter>
        </Provider>
      );

      const elements = [
        screen.getByText("SONG DETAILS"),
        screen.getByRole("list"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
