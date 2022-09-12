import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongModifyForm from "../../components/SongModifyForm/SongModifyForm";
import useApi from "../../hooks/useApi/useApi";

const initialState = {
  songName: "",
  album: "",
  year: "",
  band: "",
  image: "",
  firstInstrument: "",
  secondInstrument: "",
};

const SongModifyFormPage = (): JSX.Element => {
  const { id } = useParams();
  const [song, setSong] = useState(initialState);
  const { getOneSongById } = useApi();

  useEffect(() => {
    (async () => {
      const song = await getOneSongById(id!);
      setSong(song);
    })();
  }, [getOneSongById, id]);

  return <SongModifyForm song={song} />;
};

export default SongModifyFormPage;
