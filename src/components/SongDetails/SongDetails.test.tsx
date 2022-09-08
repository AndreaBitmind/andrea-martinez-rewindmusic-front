import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SongDetailsPage from "../../pages/SongDetailsPage/SongDetailsPage";
import { store } from "../../store/store";

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
