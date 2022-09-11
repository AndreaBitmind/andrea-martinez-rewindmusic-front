import { SyntheticEvent, useState } from "react";
import useApi from "../../hooks/useApi/useApi";
import Button from "../Button/Button";
import { FormStyle } from "../RegisterForm/FormStyled";

let newformData = new FormData();

const SongCreateForm = () => {
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

  const [formData, setFormData] = useState(initialState);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();
    await createSong({
      songName: formData.songName,
      album: formData.album,
      year: formData.year,
      band: formData.band,
      firstInstrument: formData.firstInstrument,
      secondInstrument: formData.secondInstrument,
      image: formData.image,
    });

    setFormData(initialState);
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    newformData.append("image", event.target.files![0]);
    setFormData({ ...formData, image: event.target.value });
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
          value={formData.songName}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="album"
          placeholder="Album"
          required
          autoComplete="off"
          value={formData.album}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="year"
          placeholder="Year"
          required
          autoComplete="off"
          value={formData.year}
          onChange={onChangeData}
        />
        <input
          type="text"
          id="band"
          placeholder="Band"
          required
          autoComplete="off"
          value={formData.band}
          onChange={onChangeData}
        />
        <select
          className="instrument-selection"
          data-testid="select-option1"
          id="firstInstrument"
          placeholder="Instrument"
          value={formData.firstInstrument}
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
          value={formData.secondInstrument}
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
          value={formData.image}
        />
        <Button className="submit-big" type="submit" buttonText="Upload song" />
      </form>
    </FormStyle>
  );
};

export default SongCreateForm;
