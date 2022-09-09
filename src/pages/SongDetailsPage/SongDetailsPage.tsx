import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongDetails } from "../../components/SongDetails/SongDetails";
import useApi from "../../hooks/useApi/useApi";
import { Isong } from "../../interfaces/users/Songs";

const initialState: Isong = {
  songName: "",
  album: "",
  year: "",
  band: "",
  firstInstrument: "",
  secondInstrument: "",
  image: "",
  embeded: "",
  id: "",
  owner: "",
};

const SongDetailsPage = () => {
  const [song, setSong] = useState(initialState);
  const { getOneSongById } = useApi();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const song = await getOneSongById(id!);
      setSong(song);
    })();
  }, [getOneSongById, id]);

  return (
    <SongDetails
      songName={song.songName}
      band={song.band}
      image={song.image}
      firstInstrument={song.firstInstrument}
      secondInstrument={song.secondInstrument}
      album={song.album}
      year={song.year}
    />
  );
};

export default SongDetailsPage;
