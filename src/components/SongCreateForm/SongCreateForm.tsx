import { SyntheticEvent, useState } from "react";
import useApi from "../../hooks/useApi/useApi";
import Button from "../Button/Button";
import { FormStyle } from "../RegisterForm/FormStyled";

let formData = new FormData();

const SongCreateForm = (): JSX.Element => {
  const initialState = {
    songName: "",
    album: "",
    year: "",
    band: "",
    image: "",
    firstInstrument: "",
    secondInstrument: "",
  };

  const { createSong } = useApi();

  const [formSongData, setFormSongData] = useState(initialState);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormSongData({ ...formSongData, [event.target.id]: event.target.value });
  };
  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();
    formData.append(
      "song",
      JSON.stringify({
        songName: formSongData.songName,
        album: formSongData.album,
        year: formSongData.year,
        band: formSongData.band,
        firstInstrument: formSongData.firstInstrument,
        secondInstrument: formSongData.secondInstrument,
      })
    );
    await createSong(formData);

    setFormSongData(initialState);
    formData = new FormData();
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);
    onChangeData(event);
  };

  return (
    <FormStyle>
      <h2>UPLOAD YOUR SONG</h2>
      <form onSubmit={onSubmitData}>
        <input
          type="text"
          id="songName"
          placeholder="Song name"
          required
          autoComplete="off"
          value={formSongData.songName}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="album"
          placeholder="Album"
          required
          autoComplete="off"
          value={formSongData.album}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="year"
          placeholder="Year"
          required
          autoComplete="off"
          value={formSongData.year}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="band"
          placeholder="Band"
          required
          autoComplete="off"
          value={formSongData.band}
          onChange={onChangeData}
        />
        <select
          className="instrument-selection"
          data-testid="select-option1"
          id="firstInstrument"
          placeholder="Instrument"
          value={formSongData.firstInstrument}
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
          value={formSongData.secondInstrument}
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
          value={formSongData.image}
        />
        <Button className="submit-big" type="submit" buttonText="Upload song" />
      </form>
    </FormStyle>
  );
};

export default SongCreateForm;
