import { NavLink } from "react-router-dom";

interface SongDetailsProps {
  songName: string;
  album: string;
  year: string;
  band: string;
  image: string;
  instrument: string[];
}

export const SongDetails = ({
  songName,
  album,
  year,
  band,
  image,
  instrument,
}: SongDetailsProps): JSX.Element => {
  return (
    <>
      <NavLink className="navlink-more" to="/songs">
        Back
      </NavLink>
      <div className="song-detail__title">SONG DETAILS</div>
      <section className="song-detail__details">
        <img src={image} alt={`${band} album cover`} />
        <ul className="song-detail__details-list">
          <li className="song-detail">{`Song: ${songName}`}</li>
          <li className="song-detail">{`Album: ${album}`}</li>
          <li className="song-detail">{`Year: ${year}`}</li>
          <li className="song-detail">{`Band: ${band}`}</li>
          <li className="song-detail">{`Instrument: ${instrument[0]}, ${instrument[1]}, ${instrument[2]}`}</li>
        </ul>
      </section>
    </>
  );
};
