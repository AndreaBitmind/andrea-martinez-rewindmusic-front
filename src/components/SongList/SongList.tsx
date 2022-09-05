import { useEffect } from "react";
import { useSelector } from "react-redux";
import useApi from "../../hooks/useApi/useApi";
import { RootState } from "../../store/store";
import SongCard from "../SongCard/SongCard";

const SongList = (): JSX.Element => {
  const { getAllSongs } = useApi();
  const songs = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    getAllSongs();
  }, [getAllSongs]);

  return (
    <ul className="songs-list">
      {songs.map((song) => (
        <li className="songs-list__item" key={song.id}>
          <SongCard
            songName={song.songName}
            band={song.band}
            image={song.image}
            instrument={song.instrument}
          />
        </li>
      ))}
    </ul>
  );
};

export default SongList;
