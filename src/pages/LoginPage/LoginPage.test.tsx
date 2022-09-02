import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Registro' in heading", () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      );

      const expectedTitle = screen.getByText("Sign In");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
