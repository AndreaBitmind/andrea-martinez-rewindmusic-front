import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { Header } from "./Header";

let mockUseLocation = { pathname: "/register" };

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => mockUseLocation,
}));

describe("Given a header component", () => {
  describe("When instantiated with a /register a /login path", () => {
    test("Then it should display an image, and a navigation bar", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const elements = [
        screen.getByAltText("rewindmusic logo"),
        screen.getByRole("navigation"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When instantiated with a /songs path", () => {
    test("Then it should display an image, and a navigation bar", () => {
      mockUseLocation = { pathname: "/songs" };

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const elements = [
        screen.getByAltText("rewindmusic logo"),
        screen.getByRole("navigation"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
