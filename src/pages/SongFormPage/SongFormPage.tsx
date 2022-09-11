import { useParams } from "react-router-dom";
import SongForm from "../../components/SongForm/SongForm";
import { IcreateSong, ImodifySong } from "../../interfaces/users/Songs";
import { useAppSelector } from "../../store/hooks";

const SongFormPage = (): JSX.Element => {
  const songs = useAppSelector((state) => state.songs);
  const { id } = useParams();

  const songModifyOrCreate: ImodifySong =
    songs && id
      ? (songs.find((song) => id === song.id) as IcreateSong)
      : {
          songName: "",
          album: "",
          year: "",
          band: "",
          image: "",
          firstInstrument: "",
          secondInstrument: "",
        };

  return <SongForm initialState={songModifyOrCreate} />;
};

export default SongFormPage;
