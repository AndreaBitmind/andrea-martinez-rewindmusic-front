import { useEffect } from "react";
import { useSelector } from "react-redux";
import useApi from "../../hooks/useApi/useApi";
import { RootState } from "../../store/store";

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
          {song.album}
        </li>
      ))}
    </ul>
  );
};

export default SongList;
