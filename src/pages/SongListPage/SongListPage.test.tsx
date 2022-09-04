import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import SongListPage from "./SongListPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show a list inside", () => {
      render(
        <Wrapper>
          <SongListPage />
        </Wrapper>
      );

      const expectedTitle = screen.getByRole("list");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
