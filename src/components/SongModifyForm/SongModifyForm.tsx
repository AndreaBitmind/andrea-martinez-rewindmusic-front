import { SyntheticEvent, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { ImodifySong } from "../../interfaces/users/Songs";
import Button from "../Button/Button";
import { FormStyle } from "../RegisterForm/FormStyled";

let formData = new FormData();

interface SongFormModifyProps {
  song: ImodifySong;
}

const SongModifyForm = ({ song }: SongFormModifyProps): JSX.Element => {
  const { modifySong } = useApi();

  const [songEdit, setSongEdit] = useState(song);

  useEffect(() => {
    setSongEdit({ ...song, image: "" });
  }, [song]);

  const { id } = useParams();
  const navigate = useNavigate();

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSongEdit({ ...songEdit, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();
    formData.append("song", JSON.stringify({ ...songEdit }));
    await modifySong(formData, id as string);
    setSongEdit(song);
    formData = new FormData();
    navigate("/songs");
  };
  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);
    onChangeData(event);
  };

  return (
    <FormStyle>
      <div className="main-buttons">
        <NavLink className="navlink-back" to={"/songs"}>
          Back
        </NavLink>
      </div>
      <h2>MODIFY YOUR SONG</h2>
      <form onSubmit={onSubmitData}>
        <input
          type="text"
          id="songName"
          placeholder="Song name"
          required
          autoComplete="off"
          value={songEdit.songName}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="album"
          placeholder="Album"
          required
          autoComplete="off"
          value={songEdit.album}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="year"
          placeholder="Year"
          required
          autoComplete="off"
          value={songEdit.year}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="band"
          placeholder="Band"
          required
          autoComplete="off"
          value={songEdit.band}
          onChange={onChangeData}
        />
        <select
          className="instrument-selection"
          data-testid="select-option1"
          id="firstInstrument"
          placeholder="Instrument"
          value={songEdit.firstInstrument}
          onChange={onChangeData}
          required
        >
          <option value="select">Choose first instrument</option>
          <option value="piano">Piano</option>
          <option value="saxo">Saxo</option>
          <option value="bass">Bass</option>
          <option value="trumpet">Trumpet</option>
          <option value="guitar">Guitar</option>
          <option value="flute">Flute</option>
          <option value="drum">Drum</option>
        </select>
        <select
          className="instrument-selection"
          data-testid="select-option2"
          id="secondInstrument"
          placeholder="Instrument"
          value={songEdit.secondInstrument}
          onChange={onChangeData}
          required
        >
          <option value="select">Choose second instrument</option>
          <option value="piano">Piano</option>
          <option value="saxo">Saxo</option>
          <option value="bass">Bass</option>
          <option value="trumpet">Trumpet</option>
          <option value="guitar">Guitar</option>
          <option value="flute">Flute</option>
          <option value="drum">Drum</option>
        </select>
        <input
          type="file"
          id="image"
          placeholder="Album picture"
          onChange={onChangeFile}
        />
        <Button className="submit-big" type="submit" buttonText="Upload song" />
      </form>
    </FormStyle>
  );
};

export default SongModifyForm;
