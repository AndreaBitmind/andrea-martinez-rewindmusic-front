import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Wrapper from "../../utils/Wrapper";
import SongCard from "./SongCard";

let mockDeleteSong = { deleteSong: jest.fn() };
jest.mock("../../hooks/useApi/useApi", () => () => mockDeleteSong);

describe("Given a SongCard component", () => {
  describe("When instantiated", () => {
    test("Then it should display a card with a songname, an image, a band name, a tag with the instrument and two links (delete and edit)", () => {
      render(
        <Wrapper>
          <SongCard
            band="jimmy"
            image="blabla"
            songName="songName"
            instrument={["instrument1"]}
            id="1234568468"
          />
        </Wrapper>
      );

      const elements = [
        screen.getByAltText("jimmy album cover"),
        screen.getByRole("list"),
        screen.getByRole("link"),
        screen.getByText("instrument1"),
        screen.getByText("Edit"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When click on trash icon", () => {
    test("Then it should call the deleteWish function", async () => {
      render(
        <Wrapper>
          <SongCard
            band="jimmy"
            image="blabla"
            songName="songName"
            instrument={["instrument1"]}
            id="1234568468"
          />
        </Wrapper>
      );

      const iconTrash = screen.getByTestId("icon-trash");

      await userEvent.click(iconTrash);

      expect(iconTrash).toBeInTheDocument();

      await expect(mockDeleteSong.deleteSong).toHaveBeenCalled();
    });
  });
});
