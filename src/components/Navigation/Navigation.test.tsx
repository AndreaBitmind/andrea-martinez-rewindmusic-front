import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { Navigation } from "./Navigation";

let mockUseLocation = { pathname: "/register" };
let mockLogout = { logOut: jest.fn() };

jest.mock("../../hooks/useUser/useUser", () => () => mockLogout);
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => mockUseLocation,
}));

describe("Given a navigation component", () => {
  describe("When instantiated in a /register page", () => {
    test("Then it should display a navlink as a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>
      );

      const element = screen.getByRole("navigation");

      expect(element).toBeInTheDocument();
    });
  });

  describe("When instantiated in a /songs page", () => {
    test("Then it should display two buttons", () => {
      mockUseLocation = { pathname: "/songs" };
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>
      );

      const elements = screen.getAllByRole("navigation");

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When instantiated in a /songForm page", () => {
    test("Then it should display two buttons", () => {
      mockUseLocation = { pathname: "/songForm" };
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>
      );

      const elements = screen.getAllByRole("navigation");

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When click on logOut icon", () => {
    test("Then it should call the logOut function", async () => {
      mockUseLocation = { pathname: "/songs" };
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>
      );

      const iconLogOut = screen.getByRole("button", { name: "LogOut" });

      await userEvent.click(iconLogOut);

      expect(iconLogOut).toBeInTheDocument();

      expect(mockLogout.logOut).toHaveBeenCalled();
    });
  });
});
