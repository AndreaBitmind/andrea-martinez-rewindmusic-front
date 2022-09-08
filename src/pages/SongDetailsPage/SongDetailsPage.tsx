import { SongDetails } from "../../components/SongDetails/SongDetails";
import { Isong } from "../../interfaces/users/Songs";

const initialState: Isong = {
  songName: "",
  album: "",
  year: "",
  band: "",
  instrument: [""],
  image: "",
  embeded: "",
  id: "",
  owner: "",
};

const SongDetailsPage = () => {
  return <SongDetails />;
};

export default SongDetailsPage;
