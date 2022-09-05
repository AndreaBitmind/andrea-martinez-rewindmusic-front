import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import SongCard from "./SongCard";

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
});
