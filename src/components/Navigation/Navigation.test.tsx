import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
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
        <Wrapper>
          <Navigation />
        </Wrapper>
      );

      const element = screen.getByRole("navigation");

      expect(element).toBeInTheDocument();
    });
  });

  describe("When instantiated in a /songs page", () => {
    test("Then it should display two buttons", () => {
      mockUseLocation = { pathname: "/songs" };
      render(
        <Wrapper>
          <Navigation />
        </Wrapper>
      );

      const elements = screen.getAllByRole("navigation");

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
