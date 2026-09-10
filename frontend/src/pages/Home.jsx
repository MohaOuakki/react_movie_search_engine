import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSeachQuery] = useState("");
  const movies = [
    { id: 1, title: "Mohammed film", realese_date: "2024" },
    { id: 2, title: "Mohammed film", realese_date: "2024" },
    { id: 3, title: "Mohammed film", realese_date: "2024" },
  ];
  const handleSearch = () => {};
  return (
    <div className="home">
      <form className="search-form" onClick={handleSearch}>
        <input
          type="text"
          placeholder="Search for A movie..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
