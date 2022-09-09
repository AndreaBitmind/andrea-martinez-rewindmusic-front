import Button from "../Button/Button";
import { FormStyle } from "../RegisterForm/FormStyled";

const SongForm = (): JSX.Element => {
  return (
    <FormStyle>
      <h2>UPLOAD YOUR SONG</h2>
      <form>
        <input
          type="text"
          id="songName"
          placeholder="Song name"
          required
          autoComplete="off"
        />
        <input
          type="text"
          id="album"
          placeholder="Album"
          required
          autoComplete="off"
        />
        <input
          type="text"
          id="year"
          placeholder="Year"
          required
          autoComplete="off"
        />
        <input
          type="text"
          id="band"
          placeholder="Band"
          required
          autoComplete="off"
        />
        <select
          className="instrument-selection"
          id="instrument"
          placeholder="Instrument"
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
          id="instrument"
          placeholder="Instrument"
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
        <input type="file" id="image" placeholder="Album image" required />
        <Button
          className="submit-big"
          type="submit"
          buttonText="Upload song"
          actionOnClick={() => {}}
        />
      </form>
    </FormStyle>
  );
};

export default SongForm;
