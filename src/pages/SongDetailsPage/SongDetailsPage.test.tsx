import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import SongDetailsPage from "./SongDetailsPage";

describe("Given the SongDetails page", () => {
  describe("When it's instantiated", () => {
    test("Then should show a list inside", () => {
      render(<SongDetailsPage />, { wrapper: Wrapper });

      const expectedLink = screen.getByRole("link");

      expect(expectedLink).toBeInTheDocument();
    });
  });
});
