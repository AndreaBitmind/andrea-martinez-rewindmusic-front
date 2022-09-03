import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import LoginPage from "./LoginPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Registro' in heading", () => {
      render(
        <Wrapper>
          <LoginPage />
        </Wrapper>
      );

      const expectedTitle = screen.getByText("Sign In");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
