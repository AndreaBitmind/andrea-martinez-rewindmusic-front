export const SongDetails = (): JSX.Element => {
  return (
    <>
      <div className="song-detail__title">SONG DETAILS</div>
      <section className="song-detail__details">
        <img
          src="https://m.media-amazon.com/images/I/81NYIh0POrL._SS500_.jpg"
          alt="albumPhoto"
        />
        <ul className="song-detail__details-list">
          <li className="song-detail">Song:</li>
          <li className="song-detail">Album:</li>
          <li className="song-detail">Year:</li>
          <li className="song-detail">Band:</li>
          <li className="song-detail">Instrument:</li>
        </ul>
      </section>
    </>
  );
};
