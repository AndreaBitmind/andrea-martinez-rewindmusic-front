import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Given a header component", () => {
  describe("When instantiated", () => {
    test("Then it should display an image, and a navigation bar", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const elements = [
        screen.getByAltText("rewindmusic logo"),
        screen.getByRole("navigation"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
