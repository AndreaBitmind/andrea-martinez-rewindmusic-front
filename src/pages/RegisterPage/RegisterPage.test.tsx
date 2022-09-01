import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Registro' in heading", () => {
      render(<RegisterPage />);

      const expectedTitle = screen.getByText("Create an account");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
