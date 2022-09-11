import { SyntheticEvent, useState } from "react";
import useApi from "../../hooks/useApi/useApi";
import { ImodifySong } from "../../interfaces/users/Songs";
import Button from "../Button/Button";
import { FormStyle } from "../RegisterForm/FormStyled";

interface SongFormProps {
  initialState: ImodifySong;
}

let newformData = new FormData();

const SongForm = ({ initialState }: SongFormProps): JSX.Element => {
  const { createSong } = useApi();
  const [newSong, setNewSong] = useState(initialState);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewSong({ ...newSong, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (initialState.id) {
    } else {
      await createSong(newSong);
    }
    setNewSong(initialState);
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    newformData.append("image", event.target.files![0]);
    onChangeData(event);
  };

  return (
    <FormStyle>
      <h2>{newSong.id ? "MODIFY YOUR SONG" : "UPLOAD YOUR SONG"}</h2>
      <form onSubmit={onSubmitData}>
        <input
          type="text"
          id="songName"
          placeholder="Song name"
          required
          autoComplete="off"
          value={newSong.songName}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="album"
          placeholder="Album"
          required
          autoComplete="off"
          value={newSong.album}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="year"
          placeholder="Year"
          required
          autoComplete="off"
          value={newSong.year}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="band"
          placeholder="Band"
          required
          autoComplete="off"
          value={newSong.band}
          onChange={onChangeData}
        />
        <select
          className="instrument-selection"
          data-testid="select-option1"
          id="firstInstrument"
          placeholder="Instrument"
          value={newSong.firstInstrument}
          onChange={onChangeData}
          required
        >
          <option value="select">Choose an instrument</option>
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
          value={newSong.secondInstrument}
          onChange={onChangeData}
          required
        >
          <option value="select">Choose an instrument</option>
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
          placeholder="Album image"
          onChange={onChangeFile}
          value={newSong.image}
        />
        <Button className="submit-big" type="submit" buttonText="Upload song" />
      </form>
    </FormStyle>
  );
};

export default SongForm;
