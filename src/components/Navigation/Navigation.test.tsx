import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./Navigation";

let mockUseLocation = { pathname: "/register" };

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => mockUseLocation,
}));

describe("Given a navigation component", () => {
  describe("When instantiated in a /register page", () => {
    test("Then it should display a navlink as a button", () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      const element = screen.getByRole("navigation");

      expect(element).toBeInTheDocument();
    });
  });

  describe("When instantiated in a /login page", () => {
    test("Then it should display two navlinks as a button", () => {
      mockUseLocation = { pathname: "/login" };
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      const elements = screen.getAllByRole("navigation");

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
