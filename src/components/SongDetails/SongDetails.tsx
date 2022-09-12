import { NavLink } from "react-router-dom";
import { SongDetailsStyled } from "./SongDetailsStyled";

interface SongDetailsProps {
  songName: string;
  album: string;
  year: string;
  band: string;
  image: string;
  firstInstrument: string;
  secondInstrument: string;
}

const urlBack = process.env.REACT_APP_API_URL;

export const SongDetails = ({
  songName,
  album,
  year,
  band,
  image,
  firstInstrument,
  secondInstrument,
}: SongDetailsProps): JSX.Element => {
  return (
    <SongDetailsStyled>
      <div className="navigation-bar">
        <NavLink className="navlink-more" to="/songs">
          Back
        </NavLink>
      </div>
      <div className="song-detail__title">SONG DETAILS</div>
      <section className="song-detail__details">
        <img
          width={200}
          height={200}
          src={`${urlBack}${image}`}
          alt={`${band} album cover`}
        />
        <ul className="song-detail__details-list">
          <li className="song-detail">{`Song: ${songName}`}</li>
          <li className="song-detail">{`Album: ${album}`}</li>
          <li className="song-detail">{`Year: ${year}`}</li>
          <li className="song-detail">{`Band: ${band}`}</li>
          <li className="song-detail">{`Instrument: ${firstInstrument}, ${secondInstrument}`}</li>
        </ul>
      </section>
      <div className="modify-song">
        <NavLink className="navlink" to={"/songModifyForm"}>
          Modify song
        </NavLink>
      </div>
    </SongDetailsStyled>
  );
};
