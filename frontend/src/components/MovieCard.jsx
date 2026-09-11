import "../css/MovieCard.css";
function MovieCard({ movie }) {
  function onFavouriteClick() {
    alert("cliked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src="{movie.url}" alt="{movie.title}" />
      </div>
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavouriteClick}>
          🤍
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.realese_date}</p>
      </div>
    </div>
  );
}
export default MovieCard;
