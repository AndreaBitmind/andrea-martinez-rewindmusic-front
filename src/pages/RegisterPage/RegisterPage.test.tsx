import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import RegisterPage from "./RegisterPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Registro' in heading", () => {
      render(
        <Wrapper>
          <RegisterPage />
        </Wrapper>
      );

      const expectedTitle = screen.getByText("Create an account");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
