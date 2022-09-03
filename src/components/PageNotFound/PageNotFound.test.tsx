import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./PageNotFound";

describe("Given a not found error component", () => {
  describe("When instantiated", () => {
    test("Then it should display an image, and a navigation bar button and a text", () => {
      render(
        <BrowserRouter>
          <PageNotFound />
        </BrowserRouter>
      );

      const elements = [
        screen.getByText("OOOPS! 404 PAGE NOT FOUND"),
        screen.getByAltText("page not found"),
        screen.getByRole("link"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
