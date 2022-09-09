import { useEffect } from "react";
import { useSelector } from "react-redux";
import useApi from "../../hooks/useApi/useApi";
import { Isong } from "../../interfaces/users/Songs";
import { RootState } from "../../store/store";
import SongCard from "../SongCard/SongCard";

import { SongListStyled } from "./SongListStyled";

const SongList = (): JSX.Element => {
  const { getAllSongs } = useApi();
  const songs = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    getAllSongs();
  }, [getAllSongs]);

  return (
    <SongListStyled>
      <ul className="songs-list">
        {songs.map((song: Isong) => (
          <li className="songs-list__item" key={song.id}>
            <SongCard
              songName={song.songName}
              band={song.band}
              image={song.image}
              firstInstrument={song.firstInstrument}
              secondInstrument={song.secondInstrument}
              id={song.id}
            />
          </li>
        ))}
      </ul>
    </SongListStyled>
  );
};

export default SongList;
